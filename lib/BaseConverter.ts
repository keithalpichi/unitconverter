export const errUnsupportedUnit = new Error('Unsupported unit type')
export const errNaN = new Error('Number provided is not a valid number')

/**
 * ConverterOptions is a generic interface that includes
 * the unit type and the unit value
 */
export interface ConverterOptions<T> {
  unit: T
  value?: number
}

/**
 * BaseConverter is an abstract class that provides
 * a base class for converter classes to inherit
 */
export abstract class BaseConverter<T> {
  protected errUnsupportedUnit = errUnsupportedUnit
  protected errNaN = errNaN

  protected _unit: T
  protected _value: number

  constructor (data: ConverterOptions<T>) {
    this._unit = data.unit
    this._value = this.validatePositiveNumber(data.value)
  }

  /**
   * Abstract method that should be implemented by classes
   * that inherit this class. This is the main conversion method
   * to convert the current unit to another unit
   * @param unit T
   */
  abstract to (unit: T): this

  /**
   * Validates whether n is a positive number.
   * Returns zero if n is undefined
   * Throws error ir n is less than zero
   * Otherwise it returns n
   * @param n number | undefined
   */
  private validatePositiveNumber (n: number | undefined): number {
    if (!n) {
      return 0
    }
    if (n < 0) {
      throw this.errNaN
    }
    return n
  }

  /**
   * The number to add to the current converter value.
   * Method prevents value from going below zero.
   * It returns this
   * @param n number
   */
  public add (n: number): this {
    this._value = this._value + n < 0 ? 0 : this._value + n
    return this
  }

  /**
   * Returns the current value
   */
  public value (): number {
    return this._value
  }

  /**
   * Returns the current unit
   */
  public unit (): T {
    return this._unit
  }

  /**
   * Replaces the current value with n and returns this
   * Method prevents value from being replaced by a negative number
   * @param n number
   */
  public replace (n: number): this {
    if (n >= 0) {
      this._value = n
    }
    return this
  }
}
