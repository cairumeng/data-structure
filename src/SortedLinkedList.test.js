import SortedLinkedList from './SortedLinkedList'
import { Node } from './LinkedList'

describe('SortedLinkedList', () => {
  beforeEach(() => {})

  describe('add', () => {
    beforeEach(() => {})

    it('when head is empty', () => {
      const list = new SortedLinkedList()
      expect(list.length()).toBe(0)
      list.add(new Node(3))
      expect(list.length()).toBe(1)
      expect(list.get(0).data).toBe(3)
    })

    it('when there has several nodes', () => {
      const list = new SortedLinkedList()
      list.add(new Node(4))
      list.add(new Node(3))
      list.add(new Node(6))
      list.add(new Node(7))
      expect(list.length()).toBe(4)
      expect(list.get(0).data).toBe(3)
      expect(list.get(1).data).toBe(4)
      expect(list.get(2).data).toBe(6)
      expect(list.get(3).data).toBe(7)

      const list2 = new SortedLinkedList()
      list2.add(new Node(8))
      list2.add(new Node(3))
      list2.add(new Node(3))
      list2.add(new Node(6))
      expect(list2.length()).toBe(4)
      expect(list2.get(0).data).toBe(3)
      expect(list2.get(1).data).toBe(3)
      expect(list2.get(2).data).toBe(6)
      expect(list2.get(3).data).toBe(8)
    })
  })
})
