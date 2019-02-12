import { BaseConverter, errNaN } from '../BaseConverter'

describe('BaseConverter Class', () => {
  type ConverterType = 'foo'
  class Converter extends BaseConverter<ConverterType> {
    // just return this, we don't care how this class
    // handles it
    to (_: ConverterType): this {
      return this
    }
  }

  it("Negative number provided to 'value' key throws error upon initialization", () => {
    try {
      const lc = new Converter({ unit: 'foo', value: -1 })
    } catch (error) {
      expect(error).toBe(errNaN)
    }
  })

  it('Returns the current value', () => {
    expect(new Converter({ value: 1, unit: 'foo' }).value()).toBe(1)
  })

  it('Undefined value defaults to zero', () => {
    expect(new Converter({ value: undefined, unit: 'foo' }).value()).toBe(0)
  })

  it('Adds positive number', () => {
    expect(new Converter({ value: 0, unit: 'foo' }).add(1).value()).toBe(1)
  })

  it('Adds negative number', () => {
    expect(new Converter({ value: 1, unit: 'foo' }).add(-1).value()).toBe(0)
  })

  it('Sets value to zero when adding a negative number larger than the current value', () => {
    expect(new Converter({ value: 1, unit: 'foo' }).add(-2).value()).toBe(0)
  })

  it('Replaces the current value', () => {
    expect(new Converter({ value: 10, unit: 'foo' }).replace(0).value()).toBe(0)
  })

  it('Does not update the current value when replacing the current value with a negative number', () => {
    expect(new Converter({ value: 1, unit: 'foo' }).replace(-2).value()).toBe(1)
  })

})
