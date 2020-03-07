class Node {
  data = null
  next = null

  constructor(data) {
    this.data = data
  }
}

class LinkStack {
  head = null

  length() {
    if (!this.head) return 0

    let len = 0
    let node = this.head
    while (node) {
      len++
      node = node.next
    }
    return len
  }

  push(node) {
    if (!this.head) {
      this.head = node
      return
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }

  pop() {
    if (!this.head) return null
    let current = this.head
    let prev
    if (!current.next) {
      this.head = null
      return current
    }

    while (current.next) {
      prev = current
      current = current.next
    }
    prev.next = null
    return current
  }

  peek() {
    if (!this.head) return null
    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current
  }
}

export default LinkStack
export { Node }
