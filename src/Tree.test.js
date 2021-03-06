import { Tree, Node } from './Tree'

describe('Tree', () => {
  it('insert', () => {
    let tree = new Tree()
    tree.insert(8)
    tree.insert(1)
    tree.insert(3)
    tree.insert(2)
    tree.insert(11)
    expect(tree.root.value).toBe(8)
    expect(tree.root.right.value).toBe(11)
    expect(tree.root.left.value).toBe(1)
    expect(tree.root.left.right.value).toBe(3)
    expect(tree.root.left.right.left.value).toBe(2)
  })

  it('traverse', () => {
    let tree = new Tree()
    tree.insert(8)
    tree.insert(1)
    tree.insert(3)
    tree.insert(2)
    tree.insert(11)
    const fn = (node) => (node.value *= 2)
    tree.traverse(fn)
    expect(tree.root.value).toBe(16)
    expect(tree.root.right.value).toBe(22)
    expect(tree.root.left.value).toBe(2)
    expect(tree.root.left.right.value).toBe(6)
    expect(tree.root.left.right.left.value).toBe(4)
  })

  it('search', () => {
    let tree = new Tree()
    tree.insert(8)
    tree.insert(1)
    tree.insert(3)
    tree.insert(2)
    tree.insert(11)
    expect(tree.search(1).value).toBe(1)
    expect(tree.search(8).value).toBe(8)
    expect(tree.search(3).value).toBe(3)
    expect(tree.search(2).value).toBe(2)
    expect(tree.search(11).value).toBe(11)
  })

  it('remove', () => {
    let tree = new Tree()
    expect(tree.remove(8)).toBe(null)
    tree.insert(8)
    expect(tree.remove(9)).toBe(null)
    expect(tree.root.value).toBe(8)
    expect(tree.remove(8).value).toBe(8)
    tree.insert(1)
    expect(tree.root.value).toBe(1)
    tree.insert(3)
    tree.insert(2)
    tree.insert(11)
    tree.insert(22)

    expect(tree.root.value).toBe(1)
    expect(tree.root.right.value).toBe(3)
    expect(tree.root.right.left.value).toBe(2)
    expect(tree.root.right.right.value).toBe(11)
    expect(tree.root.right.right.right.value).toBe(22)

    expect(tree.remove(2).value).toBe(2)
    expect(tree.root.right.left).toBe(null)
    expect(tree.root.right.value).toBe(3)
    expect(tree.root.right.right.value).toBe(11)
    expect(tree.root.right.right.right.value).toBe(22)

    expect(tree.remove(22).value).toBe(22)
    expect(tree.root.right.right.right).toBe(null)
    expect(tree.root.right.value).toBe(3)
    expect(tree.root.right.right.value).toBe(11)

    expect(tree.remove(3).value).toBe(3)
    expect(tree.root.right).toBe(null)
  })

  it('min', () => {
    let tree = new Tree()
    expect(tree.min()).toBe(null)
    tree.insert(8)
    expect(tree.root.value).toBe(8)
    expect(tree.min().value).toBe(8)
    tree.insert(3)
    expect(tree.min().value).toBe(3)
    tree.insert(2)
    expect(tree.min().value).toBe(2)
    tree.insert(1)
    tree.insert(11)
    expect(tree.min().value).toBe(1)
  })

  it('max', () => {
    let tree = new Tree()
    expect(tree.min()).toBe(null)
    tree.insert(8)
    expect(tree.root.value).toBe(8)
    expect(tree.max().value).toBe(8)
    tree.insert(1)
    expect(tree.max().value).toBe(8)
    tree.insert(3)
    tree.insert(2)
    tree.insert(11)
    expect(tree.max().value).toBe(11)
  })
})
