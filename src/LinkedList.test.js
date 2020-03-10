import LinkedList, { Node } from './LinkedList'

describe('LinkedList', () => {
  beforeEach(() => {})

  describe('length', () => {
    beforeEach(() => {})

    it('when head is empty', () => {
      const list = new LinkedList()
      expect(list.length()).toBe(0)
    })

    it('when head exsits', () => {
      const head = new Node('Head Data')
      const list = new LinkedList(head)
      expect(list.length()).toBe(1)
    })

    it('when there has several nodes', () => {
      const head = new Node('Head Data')
      const tail = new Node('Tail Data')
      head.next = tail
      const list = new LinkedList(head)
      expect(list.length()).toBe(2)
    })
  })

  describe('get', () => {
    beforeEach(() => {})

    it('when index is 0', () => {
      const list = new LinkedList()
      expect(list.get(0)).toBe(null)
    })

    it('when index is negatif', () => {
      const head = new Node('Head Data')
      const list = new LinkedList(head)
      expect(list.get(-1)).toBe(null)
    })

    it('when index is 10', () => {
      const head = new Node('Head Data')
      const list = new LinkedList(head)
      expect(list.get(10)).toBe(null)
    })

    it('when there has several nodes', () => {
      const head = new Node('Head Data')
      const node1 = new Node('node1')
      const tail = new Node('Tail Data')
      const list = new LinkedList(head)
      head.next = node1
      node1.next = tail
      expect(list.get(2).data).toBe('Tail Data')
    })
  })

  describe('add', () => {
    beforeEach(() => {})

    it('when head is empty', () => {
      const list = new LinkedList()
      expect(list.length()).toBe(0)
      const node1 = new Node('node1')
      list.add(node1)
      expect(list.length()).toBe(1)
    })

    it('when head is not empty', () => {
      const head = new Node('Head Data')
      const list = new LinkedList(head)
      expect(list.length()).toBe(1)
      const node1 = new Node('node1')
      list.add(node1)
      expect(list.length()).toBe(2)
    })

    it('when there has several nodes', () => {
      const head = new Node('Head Data')
      const node1 = new Node('node1')
      const tail = new Node('Tail Data')
      const list = new LinkedList(head)
      list.add(node1)
      list.add(tail)
      expect(list.length()).toBe(3)
    })
  })

  describe('find', () => {
    beforeEach(() => {})
    const fn = (node) => node.data > 10

    it('when list is empty', () => {
      const list = new LinkedList()
      expect(list.find(fn)).toBe(null)
    })

    it('when list has result', () => {
      const head = new Node(11)
      const list = new LinkedList(head)
      expect(list.find(fn).data).toBe(11)
    })

    it('when list has no result', () => {
      const head = new Node(8)
      const list = new LinkedList(head)
      expect(list.find(fn)).toBe(null)
    })

    it('when there has several nodes', () => {
      const head = new Node(1)
      const node1 = new Node(12)
      const tail = new Node(11)
      const list = new LinkedList(head)
      list.add(node1)
      list.add(tail)
      expect(list.find(fn).data).toBe(12)
    })
  })

  describe('remove', () => {
    beforeEach(() => {})
    const fn = (node) => node.data > 10

    it('when list is empty', () => {
      const list = new LinkedList()
      list.remove(fn)
      expect(list.length()).toBe(0)
    })

    it('when only one element and to be removed', () => {
      const head = new Node(11)
      const list = new LinkedList(head)
      expect(list.find(fn).data).toBe(11)
      expect(list.length()).toBe(1)
      list.remove(fn)
      expect(list.length()).toBe(0)
      expect(list.find(fn)).toBe(null)
    })

    it('when only one element and not to be removed', () => {
      const head = new Node(8)
      const list = new LinkedList(head)
      expect(list.length()).toBe(1)
      list.remove(fn)
      expect(list.length()).toBe(1)
      expect(list.find(fn)).toBe(null)
    })

    it('when remove several', () => {
      const head = new Node(1)
      const node1 = new Node(12)
      const node2 = new Node(3)
      const tail = new Node(11)
      const list = new LinkedList(head)
      list.add(node1)
      list.add(node2)
      list.add(tail)
      expect(list.find(fn).data).toBe(12)
      expect(list.length()).toBe(4)
      list.remove(fn)
      expect(list.length()).toBe(2)
      expect(list.find(fn)).toBe(null)
    })
  })
})
