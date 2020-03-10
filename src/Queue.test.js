import Queue from './Queue'

describe('Queue', () => {
  beforeEach(() => {})

  it('queue', () => {
    const queue = new Queue(5)
    expect(queue.isEmpty()).toBe(true)
    expect(queue.length()).toBe(0)
    expect(queue.dequeue()).toBe(null)
    queue.enqueue(3)
    expect(queue.length()).toBe(1)
    expect(queue.dequeue()).toBe(3)
    queue.enqueue(2)
    queue.enqueue(4)
    queue.enqueue(6)
    queue.enqueue(11)
    queue.enqueue(7)
    queue.enqueue(15)
    expect(queue.length()).toBe(5)
    expect(queue.dequeue()).toBe(2)
    expect(queue.dequeue()).toBe(4)
    expect(queue.dequeue()).toBe(6)
    expect(queue.dequeue()).toBe(11)
    expect(queue.dequeue()).toBe(7)
  })
})
