"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LengthConverter {
    constructor(data) {
        this._unit = data.unit;
        this._value = this.validatePositiveNumber(data.value);
    }
    validatePositiveNumber(number) {
        if (number < 0) {
            throw LengthConverter.errNaN;
        }
        return number;
    }
    add(n) {
        this._value = this._value < 0 ? 0 : this._value + n;
        return this;
    }
    to(unit) {
        if (unit === "in") {
            // we cant use "this[in]()" below since "in" is a reserved JS word
            return this.inches();
        }
        return this[unit]();
    }
    value() {
        return this._value;
    }
    inches() {
        if (this._unit === "in") {
            return this;
        }
        switch (this._unit) {
            case "ft":
                // ft to in
                this._value = this._value * 12;
                this._unit = "ft";
                break;
            case "cm":
                // cm to in;
                this._value = this._value / 2.54;
                this._unit = "cm";
                break;
            default:
                throw LengthConverter.errUnsupportedUnit;
        }
        return this;
    }
    ft() {
        if (this._unit === "ft") {
            return this;
        }
        switch (this._unit) {
            case "in":
                // in to ft
                this._value = this._value / 12;
                this._unit = "ft";
                break;
            case "cm":
                // cm to ft;
                this._value = Math.floor((this._value / 2.54) / 12);
                this._unit = "ft";
                break;
            default:
                throw LengthConverter.errUnsupportedUnit;
        }
        return this;
    }
    cm() {
        if (this._unit === "cm") {
            return this;
        }
        switch (this._unit) {
            case "ft":
                // ft to cm
                this._value = (this._value * 12) * 2.54;
                this._unit = "cm";
                break;
            case "in":
                // in to cm;
                this._value = this._value * 2.54;
                this._unit = "ft";
                break;
            default:
                throw LengthConverter.errUnsupportedUnit;
        }
        return this;
    }
}
LengthConverter.errUnsupportedUnit = new Error("Unsupported unit type");
LengthConverter.errNaN = new Error("Number provided is not a valid number");
exports.default = LengthConverter;
