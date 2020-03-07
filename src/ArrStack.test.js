import ArrStack from './ArrStack'

describe('ArrStack', () => {
  beforeEach(() => {})

  describe('push', () => {
    beforeEach(() => {})

    it('arr is empty', () => {
      const arrStack = new ArrStack(5)
      expect(arrStack.isEmpty()).toBe(true)
      expect(arrStack.length()).toBe(0)
      expect(arrStack.peek()).toBe(null)
      expect(arrStack.pop()).toBe(null)
      arrStack.push(3)
      expect(arrStack.length()).toBe(1)
      expect(arrStack.peek()).toBe(3)
      expect(arrStack.pop()).toBe(3)
      arrStack.push(2)
      arrStack.push(4)
      arrStack.push(6)
      arrStack.push(11)
      arrStack.push(7)
      arrStack.push(15)
      expect(arrStack.length()).toBe(5)
      expect(arrStack.peek()).toBe(7)
    })
  })
})
