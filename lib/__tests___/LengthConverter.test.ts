import { LengthConverter, LengthOptions } from '../LengthConverter'

describe('LengthConverter Class', () => {
  it('Contains a static propery for the order of conversions', () => {
    expect(LengthConverter.orderOfConversion).toEqual([
      'mm', 'cm', 'in', 'ft', 'yd', 'm'
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
    expect(unitConverter.to('in').value()).toBeCloseTo(0.393701, 5)
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
    expect(new LengthConverter(value).to('in').value()).toBeCloseTo(0.0393701, 5)
  })

  it('Converts yd to in', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'yd'
    }
    expect(new LengthConverter(value).to('in').value()).toBe(36)
  })

  it('Converts meter to in', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'm'
    }
    expect(new LengthConverter(value).to('in').value()).toBeCloseTo(39.36996, 5)
  })
})

describe('LengthConverter Class: Conversions to feet', () => {
  it('Converts cm to ft', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'cm'
    }
    expect(new LengthConverter(value).to('ft').value()).toBeCloseTo(0.0328084, 5)
  })

  it('Converts in to ft', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'in'
    }
    expect(new LengthConverter(value).to('ft').value()).toBeCloseTo(0.0833333, 5)
  })

  it('Converts mm to ft', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'mm'
    }
    expect(new LengthConverter(value).to('ft').value()).toBeCloseTo(0.00328084, 5)
  })

  it('Converts yd to ft', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'yd'
    }
    expect(new LengthConverter(value).to('ft').value()).toBe(3)
  })

  it('Converts meter to ft', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'm'
    }
    expect(new LengthConverter(value).to('ft').value()).toBeCloseTo(3.28083, 5)
  })
})

describe('LengthConverter Class: Conversions to centimeters', () => {
  it('Converts ft to cm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'ft'
    }
    expect(new LengthConverter(value).to('cm').value()).toBeCloseTo(30.48)
  })

  it('Converts in to cm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'in'
    }
    expect(new LengthConverter(value).to('cm').value()).toBeCloseTo(2.54)
  })

  it('Converts mm to cm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'mm'
    }
    expect(new LengthConverter(value).to('cm').value()).toBe(0.1)
  })

  it('Converts yd to cm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'yd'
    }
    expect(new LengthConverter(value).to('cm').value()).toBeCloseTo(91.44)
  })

  it('Converts meter to cm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'm'
    }
    expect(new LengthConverter(value).to('cm').value()).toBeCloseTo(99.9996984, 5)
  })
})

describe('LengthConverter Class: Conversions to millimeters', () => {
  it('Converts in to mm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'in'
    }
    expect(new LengthConverter(value).to('mm').value()).toBeCloseTo(25.4)
  })

  it('Converts ft to mm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'ft'
    }
    expect(new LengthConverter(value).to('mm').value()).toBeCloseTo(304.8)
  })

  it('Converts cm to mm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'cm'
    }
    expect(new LengthConverter(value).to('mm').value()).toBe(10)
  })

  it('Converts yd to mm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'yd'
    }
    expect(new LengthConverter(value).to('mm').value()).toBeCloseTo(914.4)
  })

  it('Converts meter to mm', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'm'
    }
    expect(new LengthConverter(value).to('mm').value()).toBeCloseTo(999.996984, 5)
  })
})

describe('LengthConverter Class: Conversions to yards', () => {
  it('Converts in to yd', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'in'
    }
    expect(new LengthConverter(value).to('yd').value()).toBeCloseTo(0.0277778, 5)
  })

  it('Converts ft to yd', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'ft'
    }
    expect(new LengthConverter(value).to('yd').value()).toBeCloseTo(0.333333, 5)
  })

  it('Converts cm to yd', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'cm'
    }
    expect(new LengthConverter(value).to('yd').value()).toBeCloseTo(0.0109361, 5)
  })

  it('Converts mm to yd', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'mm'
    }
    expect(new LengthConverter(value).to('yd').value()).toBeCloseTo(0.00109361, 5)
  })

  it('Converts meter to yd', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'm'
    }
    expect(new LengthConverter(value).to('yd').value()).toBeCloseTo(1.09361, 5)
  })
})

describe('LengthConverter Class: Conversions to meters', () => {
  it('Converts in to m', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'in'
    }
    expect(new LengthConverter(value).to('m').value()).toBeCloseTo(0.0254, 5)
  })

  it('Converts ft to m', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'ft'
    }
    expect(new LengthConverter(value).to('m').value()).toBeCloseTo(0.3048, 5)
  })

  it('Converts cm to m', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'cm'
    }
    expect(new LengthConverter(value).to('m').value()).toBeCloseTo(0.01, 5)
  })

  it('Converts mm to m', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'mm'
    }
    expect(new LengthConverter(value).to('m').value()).toBeCloseTo(0.001, 5)
  })

  it('Converts yd to m', () => {
    const value: LengthOptions = {
      value: 1,
      unit: 'yd'
    }
    expect(new LengthConverter(value).to('m').value()).toBeCloseTo(0.9144, 5)
  })
})
