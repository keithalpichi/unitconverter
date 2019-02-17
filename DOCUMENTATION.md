# Documentation

<details>
<summary>v1.3.0</summary>

# LengthConverter

Named export `UnitConverter.LengthConverter`

### `LengthTypes`
The currently supported units

`"cm" | "ft" | "in" | "mm"`

### `LengthOptions`
Options object provided to the constructor
```
{
  unit: LengthTypes
  value: number | undefined
}
```

## Constructor
`new LengthConverter(LengthOptions) : LengthConverter`

Accepts `LengthOptions` and returns an instance of `LengthConverter`


## Methods

#### `to(LengthTypes) : LengthConverter`
Accepts `LengthTypes` and returns the `LengthConverter` instance

#### `value() : number`
Returns the latest converted number

#### `replace(n : number) : LengthConverter`
Replaces the current value with `n` and returns `LengthConverter` instance. This method prevents the current value from being replaced by a negative number.

#### `unit() : LengthTypes`
Returns the current unit


# MassConverter

*tbd*

# VolumeConverter

*tbd*

</details>

<details>
<summary>v1.2.0</summary>

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

#### `replace(n : number) : LengthConverter`
Replaces the current value with `n` and returns `LengthConverter` instance. This method prevents the current value from being replaced by a negative number.

# MassConverter

*tbd*

# VolumeConverter

*tbd*

</details>

<details>
<summary>v1.1.0</summary>

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

# MassConverter

*tbd*

# VolumeConverter

*tbd*
</details>