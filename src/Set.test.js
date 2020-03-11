import Set from './Set'

describe('Set', () => {
  it('Set', () => {
    const set = new Set()
    expect(set.has(4)).toBe(false)
    expect(set.add(4)).toBe(4)
    expect(set.add('name')).toBe('name')
    expect(set.add(null)).toBe(null)
    expect(set.remove(4)).toBe(true)
    expect(set.add(4)).toBe(4)
    expect(set.add(5)).toBe(5)
    expect(set.size()).toBe(4)
    expect(set.remove(null)).toBe(true)
    expect(set.values()).toEqual([4, 5, 'name'])
    set.clear()
    expect(set.size()).toBe(0)
  })

  describe('Operations', () => {
    const set = new Set()
    const set2 = new Set()

    beforeEach(() => {
      set.clear()
      set2.clear()

      set.add(1)
      set.add(2)
      set.add(3)
      set.add(4)
      set2.add(2)
      set2.add(3)
      set2.add(4)
      set2.add(5)
    })

    it('Union', () => {
      expect(set.union(set2).values()).toEqual([1, 2, 3, 4, 5])
    })

    it('intersection', () => {
      expect(set.intersection(set2).values()).toEqual([2, 3, 4])
    })

    it('difference', () => {
      expect(set2.difference(set).values()).toEqual([5])
      expect(set.difference(set2).values()).toEqual([1])
    })
  })
})
