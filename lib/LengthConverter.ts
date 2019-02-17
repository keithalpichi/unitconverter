import { BaseConverter, ConverterOptions } from './BaseConverter'

export type LengthOptions = ConverterOptions<LengthTypes>

/**
 * LengthTypes is a type that contains the supported length units.
 */
export type LengthTypes = 'ft' | 'cm' | 'in' | 'mm'

/**
 * LengthConverter is a class that converts
 * numbers of one unit of length to another
 */
export class LengthConverter extends BaseConverter<LengthTypes> {
  static orderOfConversion: LengthTypes[] = [
    'mm', 'cm', 'in', 'ft'
  ]

  public to (unit: LengthTypes): this {
    return this.convert(this._value, this._unit, unit)
  }

  private inches (value: number, from: LengthTypes): number {
    if (from === 'in') {
      return value
    }
    switch (from) {
      case 'ft':
        // ft to in
        return value * 12
      case 'cm':
        // cm to in;
        return value / 2.54
      default:
        throw this.errUnsupportedUnit
    }
  }

  private ft (value: number, from: LengthTypes): number {
    if (from === 'ft') {
      return value
    }
    switch (from) {
      case 'in':
        // in to ft
        return value / 12
      default:
        throw this.errUnsupportedUnit
    }
  }

  private cm (value: number, from: LengthTypes): number {
    if (from === 'cm') {
      return value
    }
    switch (from) {
      case 'mm':
        // mm to cm
        return value / 10
      case 'in':
        // in to cm;
        return value * 2.54
      default:
        throw this.errUnsupportedUnit
    }
  }

  private mm (value: number, from: LengthTypes): number {
    if (from === 'mm') {
      return value
    }
    switch (from) {
      case 'cm':
        // cm to mm
        return value * 10
      default:
        throw this.errUnsupportedUnit
    }
  }

  private convert (value: number, currentUnit: LengthTypes, goalUnit: LengthTypes): this {
    // when we arrive at the goal unit, return this
    if (currentUnit === goalUnit) {
      this._unit = goalUnit
      this._value = value
      return this
    }

    // find which direction we're converting: small/low to large/high, or the other way
    // then we'll know which unit to convert to next
    const currentUnitIndex = LengthConverter.orderOfConversion.findIndex(u => u === currentUnit)
    const goalUnitIndex = LengthConverter.orderOfConversion.findIndex(u => u === goalUnit)
    let index: number
    if (currentUnitIndex < goalUnitIndex) {
      index = currentUnitIndex + 1
    } else {
      index = currentUnitIndex - 1
    }

    // get the correct method to use to convert the value
    const nextUnit = LengthConverter.orderOfConversion[index]
    let method: any
    switch (nextUnit) {
      case 'mm':
        method = this.mm
        break
      case 'cm':
        method = this.cm
        break
      case 'in':
        method = this.inches
        break
      case 'ft':
        method = this.ft
        break
      default:
        throw this.errUnsupportedUnit
    }

    // get the newly converted value
    const newValue = method(value, currentUnit)

    // call this function recursively until we reach the goal unit
    return this.convert(newValue, nextUnit, goalUnit)
  }
}
