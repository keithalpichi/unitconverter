export declare type LengthTypes = 'ft' | 'cm' | 'in';
export interface LengthOptions {
    unit: LengthTypes;
    value?: number;
}
export declare class LengthConverter {
    static errUnsupportedUnit: Error;
    static errNaN: Error;
    private _unit;
    private _value;
    constructor(data: LengthOptions);
    validatePositiveNumber(n: number | undefined): number;
    add(n: number): this;
    to(unit: LengthTypes): this;
    value(): number;
    inches(): this;
    ft(): this;
    cm(): this;
}
