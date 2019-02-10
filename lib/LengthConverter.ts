/**
 * LengthTypes is a type that contains the supported length units.
 */
export type LengthTypes = 'ft' | 'cm' | 'in'

/**
 * LengthOptions is an interface that the LengthConverter class
 * accepts as an argument
 */
export interface LengthOptions {
  unit: LengthTypes
  value?: number
}

/**
 * LengthConverter is a class that converts
 * numbers of one unit of length to another
 */
export class LengthConverter {
  static errUnsupportedUnit = new Error('Unsupported unit type')
  static errNaN = new Error('Number provided is not a valid number')

  private _unit: LengthTypes
  private _value: number

  constructor (data: LengthOptions) {
    this._unit = data.unit
    this._value = this.validatePositiveNumber(data.value)
  }

  private validatePositiveNumber (n: number | undefined) {
    if (!n) {
      return 0
    }
    if (n < 0) {
      throw LengthConverter.errNaN
    }
    return n
  }

  add (n: number): this {
    this._value = this._value < 0 ? 0 : this._value + n
    return this
  }

  to (unit: LengthTypes): this {
    if (unit === 'in') {
      // we cant use "this[in]()" below since "in" is a reserved JS word
      return this.inches()
    }
    return this[unit]()
  }

  value (): number {
    return this._value
  }

  private inches (): this {
    if (this._unit === 'in') {
      return this
    }
    switch (this._unit) {
      case 'ft':
        // ft to in
        this._value = this._value * 12
        this._unit = 'ft'
        break
      case 'cm':
        // cm to in;
        this._value = this._value / 2.54
        this._unit = 'cm'
        break
      default:
        throw LengthConverter.errUnsupportedUnit
    }
    return this
  }

  private ft (): this {
    if (this._unit === 'ft') {
      return this
    }
    switch (this._unit) {
      case 'in':
        // in to ft
        this._value = this._value / 12
        this._unit = 'ft'
        break
      case 'cm':
        // cm to ft;
        this._value = Math.floor((this._value / 2.54) / 12)
        this._unit = 'ft'
        break
      default:
        throw LengthConverter.errUnsupportedUnit
    }
    return this
  }

  private cm (): this {
    if (this._unit === 'cm') {
      return this
    }
    switch (this._unit) {
      case 'ft':
        // ft to cm
        this._value = (this._value * 12) * 2.54
        this._unit = 'cm'
        break
      case 'in':
        // in to cm;
        this._value = this._value * 2.54
        this._unit = 'ft'
        break
      default:
        throw LengthConverter.errUnsupportedUnit
    }
    return this
  }
}
