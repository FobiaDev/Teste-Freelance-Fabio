import { Either, failure, success } from './either'

function doSomething(shouldSuccess: boolean): Either<string, string> {
  if (shouldSuccess) {
    return success('success')
  } else {
    return failure('failure')
  }
}

test('success result', () => {
  const result = doSomething(true)

  expect(result.isSuccess()).toBe(true)
  expect(result.isFailure()).toBe(false)
  expect(result.value).toEqual('success')
})

test('failure result', () => {
  const result = doSomething(false)

  expect(result.isSuccess()).toBe(false)
  expect(result.isFailure()).toBe(true)
  expect(result.value).toEqual('failure')
})
