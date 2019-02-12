import { BaseConverter, ConverterOptions } from './BaseConverter'

export type LengthOptions = ConverterOptions<LengthTypes>

/**
 * LengthTypes is a type that contains the supported length units.
 */
export type LengthTypes = 'ft' | 'cm' | 'in'

/**
 * LengthConverter is a class that converts
 * numbers of one unit of length to another
 */
export class LengthConverter extends BaseConverter<LengthTypes> {
  to (unit: LengthTypes): this {
    if (unit === 'in') {
      // we cant use "this[in]()" below since "in" is a reserved JS word
      return this.inches()
    }
    return this[unit]()
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
        throw this.errUnsupportedUnit
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
        throw this.errUnsupportedUnit
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
        throw this.errUnsupportedUnit
    }
    return this
  }
}
