import { operation, isNumber } from './Operation'

describe('isNumber', () => {
  beforeEach(() => {})

  it('letter', () => {
    expect(isNumber('')).toBe(false)
  })

  it('letter', () => {
    expect(isNumber('a')).toBe(false)
  })

  it('letter', () => {
    expect(isNumber('A')).toBe(false)
  })

  it('letter', () => {
    expect(isNumber('!')).toBe(false)
  })
  it('letter', () => {
    expect(isNumber('1')).toBe(1)
  })

  it('letter', () => {
    expect(isNumber('0')).toBe(0)
  })

  it('letter', () => {
    expect(isNumber('9')).toBe(9)
  })
})

describe('Operation', () => {
  beforeEach(() => {})

  it('arr is empty', () => {
    expect(operation('')).toBe(null)
  })

  it('arr is not empty', () => {
    expect(operation('34+')).toBe(7)
  })

  it('arr is not empty', () => {
    expect(operation('34+1+')).toBe(8)
  })

  it('arr is not empty', () => {
    expect(operation('345679+-*/+')).toBe(3)
  })

  it('arr is not empty', () => {
    expect(operation('345679+-*/')).toBe(null)
  })
})
