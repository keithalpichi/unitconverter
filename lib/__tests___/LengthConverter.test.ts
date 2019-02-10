import { LengthConverter, LengthOptions } from '../index'

describe('LengthConverter Class', () => {
  const errNaN = 'Number provided is not a valid number'
  it("Negative number provided to 'value' key throws error upon initialization", () => {
    try {
      const lc = new LengthConverter({ unit: 'cm', value: -1 })
    } catch (error) {
      expect(error.message).toBe(errNaN)
    }
  })

  it('Undefined value defaults to zero', () => {
    expect(new LengthConverter({ value: undefined, unit: 'in' }).value()).toBe(0)
  })

  it('Converts cm to inches', () => {
    const value: LengthOptions = {
      value: 152.4,
      unit: 'cm'
    }
    const unitConverter = new LengthConverter(value)
    expect(unitConverter.to('in').value()).toBe(60)
  })

  it('Converts cm to ft', () => {
    const value: LengthOptions = {
      value: 152.4,
      unit: 'cm'
    }
    expect(new LengthConverter(value).to('ft').value()).toBe(5)
    expect(new LengthConverter({ ...value, value: 152.475 }).to('ft').value()).toBe(5)
  })

  it('Converts ft to in', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'ft'
    }
    expect(new LengthConverter(value).to('in').value()).toBe(12)
  })

  it('Converts ft to cm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'ft'
    }
    expect(new LengthConverter(value).to('cm').value()).toBe(30.48)
  })

  it('Converts in to ft', () => {
    const value: LengthOptions = {
      value: 12,
      unit: 'in'
    }
    expect(new LengthConverter(value).to('ft').value()).toBe(1)
  })

  it('Converts in to cm', () => {
    const value: LengthOptions = {
      value: 12,
      unit: 'in'
    }
    expect(new LengthConverter(value).to('cm').value()).toBe(30.48)
  })
})
