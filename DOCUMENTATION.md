# LengthConverter

Named export `UnitConverter.LengthConverter`

## Constructor
`new LengthConverter(LengthOptions) : LengthConverter`

Accepts `LengthOptions` and returns an instance of `LengthConverter`

### `LengthTypes`

`"cm" | "ft" | "in"`

### `LengthOptions`
```
{
  unit: LengthTypes
  value: number | undefined
}
```

## Methods

#### `to(LengthTypes) : LengthConverter`
Accepts `LengthTypes` and returns the `LengthConverter` instance

#### `value() : number`
Returns the latest converted number