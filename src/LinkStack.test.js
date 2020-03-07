import LinkStack, { Node } from './LinkStack'

describe('LinkStack', () => {
  it('when head is empty', () => {
    const stack = new LinkStack()
    expect(stack.length()).toBe(0)
    expect(stack.peek()).toBe(null)
    expect(stack.pop()).toBe(null)
  })

  it('when head exsits', () => {
    const stack = new LinkStack()
    stack.push(new Node('Head Data'))
    expect(stack.length()).toBe(1)
  })

  it('when pop several', () => {
    const stack = new LinkStack()
    stack.push(new Node(1))
    stack.push(new Node(12))
    stack.push(new Node(3))
    expect(stack.length()).toBe(3)

    expect(stack.peek().data).toBe(3)
    expect(stack.pop().data).toBe(3)
    expect(stack.length()).toBe(2)

    expect(stack.peek().data).toBe(12)
    expect(stack.pop().data).toBe(12)
    expect(stack.length()).toBe(1)

    expect(stack.peek().data).toBe(1)
    expect(stack.pop().data).toBe(1)
    expect(stack.length()).toBe(0)
  })
})
