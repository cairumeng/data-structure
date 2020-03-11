import QuickSort, { medium3 } from './QuickSort'

describe('medium3', () => {
  it('medium3', () => {
    let arr = [0, 3, 4]
    let pivot = medium3(arr, 0, 2)
    expect(arr).toEqual([0, 3, 4])
    expect(pivot).toEqual(3)

    arr = [2, 1, 4]
    pivot = medium3(arr, 0, 2)
    expect(arr).toEqual([1, 2, 4])
    expect(pivot).toEqual(2)

    arr = [4, 3, 1]
    pivot = medium3(arr, 0, 2)
    expect(arr).toEqual([1, 3, 4])
    expect(pivot).toEqual(3)

    arr = [4, 1, 3]
    pivot = medium3(arr, 0, 2)
    expect(arr).toEqual([1, 3, 4])
    expect(pivot).toEqual(3)

    arr = [4, 3, 1, 10, 2, 9, 8, 4]
    pivot = medium3(arr, 0, arr.length - 1)
    expect(arr).toEqual([4, 3, 1, 8, 2, 9, 4, 10])
    expect(pivot).toEqual(4)
  })
})

describe.only('QuickSort', () => {
  it('when arr is empty', () => {
    const arr = []
    QuickSort(arr)
    expect(arr).toEqual([])
  })

  it('when arr has one element', () => {
    const arr = [9]
    QuickSort(arr)
    expect(arr).toEqual([9])
  })

  it('when arr has two elements', () => {
    const arr = [9, 1]
    QuickSort(arr)
    expect(arr).toEqual([1, 9])
  })

  it('when there has several elements', () => {
    const arr = [7, 9, 12, 5, 3, 0]
    QuickSort(arr)
    expect(arr).toEqual([0, 3, 5, 7, 9, 12])
  })

  it('2 when there has several elements', () => {
    const arr = [-20, -11, 1, 9, 12, 5, 3, 5, 100]
    QuickSort(arr)
    expect(arr).toEqual([-20, -11, 1, 3, 5, 5, 9, 12, 100])
  })
})
