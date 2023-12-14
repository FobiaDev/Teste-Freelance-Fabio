import { Price } from './price'

it('should be able to create a price from cents value', () => {
  const price = Price.createFromCents(100)

  expect(price.value).toEqual(1)
})
