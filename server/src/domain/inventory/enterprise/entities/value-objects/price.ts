export class Price {
  public value: number

  private constructor(value: number) {
    if (value < 0) {
      throw new Error('The price value cannot be negative.')
    }

    this.value = value
  }

  toString(): string {
    return this.value.toFixed(2)
  }

  toValue(): number {
    return this.value
  }

  toValueInCents(): number {
    return this.value * 100
  }

  static create(price: number) {
    return new Price(price)
  }

  static createFromCents(cents: number) {
    if (cents < 0) {
      throw new Error('The value in cents cannot be negative.')
    }

    return new Price(cents / 100)
  }
}
