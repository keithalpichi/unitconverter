import { LengthConverter, LengthOptions } from '../LengthConverter'

describe('LengthConverter Class', () => {
  it('Contains a static propery for the order of conversions', () => {
    expect(LengthConverter.orderOfConversion).toEqual([
      'mm', 'cm', 'in', 'ft'
    ])
  })
})

describe('LengthConverter Class: Conversions to inches', () => {
  it('Converts cm to in', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'cm'
    }
    const unitConverter = new LengthConverter(value)
    expect(unitConverter.to('in').value()).toBeCloseTo(0.393701)
  })

  it('Converts ft to in', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'ft'
    }
    expect(new LengthConverter(value).to('in').value()).toBe(12)
  })

  it('Converts mm to in', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'mm'
    }
    expect(new LengthConverter(value).to('in').value()).toBeCloseTo(0.0393701)
  })
})

describe('LengthConverter Class: Conversions to feet', () => {
  it('Converts cm to ft', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'cm'
    }
    expect(new LengthConverter(value).to('ft').value()).toBeCloseTo(0.0328084)
  })

  it('Converts in to ft', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'in'
    }
    expect(new LengthConverter(value).to('ft').value()).toBeCloseTo(0.0833333)
  })

  it('Converts mm to ft', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'mm'
    }
    expect(new LengthConverter(value).to('ft').value()).toBeCloseTo(0.00328084)
  })
})

describe('LengthConverter Class: Conversions to centimeters', () => {
  it('Converts ft to cm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'ft'
    }
    expect(new LengthConverter(value).to('cm').value()).toBe(30.48)
  })

  it('Converts in to cm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'in'
    }
    expect(new LengthConverter(value).to('cm').value()).toBe(2.54)
  })

  it('Converts mm to cm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'mm'
    }
    expect(new LengthConverter(value).to('cm').value()).toBe(0.1)
  })
})

describe('LengthConverter Class: Conversions to millimeters', () => {
  it('Converts in to mm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'in'
    }
    expect(new LengthConverter(value).to('mm').value()).toBe(25.4)
  })

  it('Converts ft to mm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'ft'
    }
    expect(new LengthConverter(value).to('mm').value()).toBe(304.8)
  })

  it('Converts cm to mm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'cm'
    }
    expect(new LengthConverter(value).to('mm').value()).toBe(10)
  })
})
