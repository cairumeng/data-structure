class Node {
  data = null
  next = null

  constructor(data) {
    this.data = data
  }
}

class LinkedList {
  head = null

  constructor(head) {
    this.head = head
  }

  // O(n)
  length() {
    let length = 0
    let current = this.head
    if (!current) return length
    do {
      length++
      current = current.next
    } while (current)
    return length
  }

  // O(n)
  add(node) {
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

  // O(2n)
  get(index) {
    const length = this.length()
    if (index < 0) return null
    if (index >= length) return null
    let i = 0
    let current = this.head
    while (i !== index) {
      current = current.next
      i++
    }
    return current
  }

  // O(n)
  find(fn) {
    if (!this.head) return null
    let current = this.head
    while (current && !fn(current)) {
      current = current.next
    }
    return current
  }

  sort(fn) {}

  // O(n)
  remove(fn) {
    if (!this.head) return
    if (fn(this.head)) {
      if (!this.head.next) {
        this.head = null
      } else {
        this.head = this.head.next
      }
      return
    }
    let prev = this.head
    let current = this.head.next
    while (current) {
      if (fn(current)) {
        prev.next = current.next
      }
      prev = current
      current = current.next
    }
    console.log(this.head)
  }
}

export default LinkedList
export { Node }
