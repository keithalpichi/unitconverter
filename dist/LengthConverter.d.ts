declare type LengthTypes = "ft" | "cm" | "in";
interface LengthOptions {
    unit: LengthTypes;
    value: number;
}
export default class LengthConverter {
    static errUnsupportedUnit: Error;
    static errNaN: Error;
    private _unit;
    private _value;
    constructor(data: LengthOptions);
    validatePositiveNumber(number: number): number;
    add(n: number): this;
    to(unit: LengthTypes): this;
    value(): number;
    inches(): this;
    ft(): this;
    cm(): this;
}
export {};
