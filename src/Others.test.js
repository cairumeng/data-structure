import {
  fibonacci,
  fibonacci2,
  fact,
  reversePrint,
  reversePrint2,
} from './Others'

describe('Others', () => {
  describe('fibonacci', () => {
    beforeEach(() => {})

    it('n=0', () => {
      expect(fibonacci(0)).toEqual(0)
    })

    it('n=1', () => {
      expect(fibonacci(1)).toEqual(1)
    })

    it('n=5', () => {
      expect(fibonacci(5)).toEqual(5)
    })

    it('n=6', () => {
      expect(fibonacci(6)).toEqual(8)
    })
  })

  describe('fibonacci2', () => {
    beforeEach(() => {})

    it('n=0', () => {
      expect(fibonacci2(0)).toEqual(0)
    })

    it('n=1', () => {
      expect(fibonacci2(1)).toEqual(1)
    })

    it('n=5', () => {
      expect(fibonacci2(5)).toEqual(5)
    })

    it('n=6', () => {
      expect(fibonacci2(6)).toEqual(8)
    })
  })

  describe('fact', () => {
    beforeEach(() => {})

    it('n=0', () => {
      expect(fact(0)).toEqual(0)
    })

    it('n=1', () => {
      expect(fact(1)).toEqual(1)
    })

    it('n=2', () => {
      expect(fact(2)).toEqual(2)
    })

    it('n=3', () => {
      expect(fact(3)).toEqual(6)
    })
  })

  describe('reversePrint', () => {
    beforeEach(() => {})

    it('n=0', () => {
      //   reversePrint(1234)
      //   console.log('----')
      //   reversePrint(0)
      //   console.log('----')
      // reversePrint2(1234)
      //   reversePrint2(0)
    })
  })
})
