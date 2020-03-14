import ValidParenthese from './ValidParenthese'

describe('ValidParenthese', () => {
  beforeEach(() => {})

  it('arr is empty', () => {
    expect(ValidParenthese('')).toBe(true)
  })
  it('arr is not empty', () => {
    expect(ValidParenthese('5s%()[')).toBe(false)
  })

  it('arr is not empty', () => {
    expect(ValidParenthese('5s%()[]')).toBe(true)
  })

  it('arr is not empty', () => {
    expect(ValidParenthese('5s%((())[]')).toBe(false)
  })

  it('arr is not empty', () => {
    expect(ValidParenthese('5s%((678|><({hjl}joj)jkll))[]')).toBe(true)
  })
})
