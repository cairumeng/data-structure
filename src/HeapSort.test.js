import HeapSort from './HeapSort'

describe('HeapSort', () => {
  it('when arr is empty', () => {
    const arr = []
    HeapSort(arr)
    expect(arr).toEqual([])
  })

  it('when arr has one element', () => {
    const arr = [9]
    HeapSort(arr)
    expect(arr).toEqual([9])
  })

  it('when there has several elements', () => {
    const arr = [7, 9, 12, 5, 3, 0]
    HeapSort(arr)
    expect(arr).toEqual([0, 3, 5, 7, 9, 12])
  })

  it('2 when there has several elements', () => {
    const arr = [-20, -11, 1, 9, 12, 5, 3, 5, 100]
    HeapSort(arr)
    expect(arr).toEqual([-20, -11, 1, 3, 5, 5, 9, 12, 100])
  })
})
