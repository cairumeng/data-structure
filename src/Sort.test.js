import { bubbleSort, selectSort, insertionSort } from './Sort'

describe('sort', () => {
  describe('bubbleSort', () => {
    beforeEach(() => {})

    it('when arr is empty', () => {
      const arr = []
      expect(bubbleSort(arr)).toEqual([])
    })

    it('when arr has one element', () => {
      const arr = [9]
      expect(bubbleSort(arr)).toEqual([9])
    })

    it('when there has several elements', () => {
      const arr = [7, 9, 12, 5, 3, 0]
      expect(bubbleSort(arr)).toEqual([0, 3, 5, 7, 9, 12])
    })

    it('2 when there has several elements', () => {
      const arr = [1, 9, 12, 5, 3, 5]
      expect(bubbleSort(arr)).toEqual([1, 3, 5, 5, 9, 12])
    })
  })

  describe('selectSort', () => {
    beforeEach(() => {})

    it('when arr is empty', () => {
      const arr = []
      expect(selectSort(arr)).toEqual([])
    })

    it('when arr has one element', () => {
      const arr = [9]
      expect(selectSort(arr)).toEqual([9])
    })

    it('when there has several elements', () => {
      const arr = [7, 9, 12, 5, 3, 0]
      expect(selectSort(arr)).toEqual([0, 3, 5, 7, 9, 12])
    })

    it('2 when there has several elements', () => {
      const arr = [1, 9, 12, 5, 3, 5]
      expect(selectSort(arr)).toEqual([1, 3, 5, 5, 9, 12])
    })
  })

  describe('insertionSort', () => {
    beforeEach(() => {})

    it('when arr is empty', () => {
      const arr = []
      expect(insertionSort(arr)).toEqual([])
    })

    it('when arr has one element', () => {
      const arr = [9]
      expect(insertionSort(arr)).toEqual([9])
    })

    it('when there has several elements', () => {
      const arr = [7, 9, 12, 5, 3, 0]
      expect(insertionSort(arr)).toEqual([0, 3, 5, 7, 9, 12])
    })

    it('2 when there has several elements', () => {
      const arr = [1, 9, 12, 5, 3, 5]
      expect(insertionSort(arr)).toEqual([1, 3, 5, 5, 9, 12])
    })
  })
})
