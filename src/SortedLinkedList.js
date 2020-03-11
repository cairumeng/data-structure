import { Node } from './LinkedList'

class SortedLinkedList {
  head = null
  increase = true

  constructor(increase = true) {
    this.increase = increase
  }

  //   add(node) {
  //     if (this.increase) {
  //       if (!this.head) {
  //         this.head = node
  //         return
  //       }

  //       let current = this.head
  //       let tmp

  //       if (current.data > node.data) {
  //         this.head = node
  //         node.next = current
  //         return
  //       }

  //       while (current) {
  //         if (
  //           current.data <= node.data &&
  //           current.next &&
  //           node.data < current.next.data
  //         ) {
  //           tmp = current.next
  //           current.next = node
  //           node.next = tmp
  //           return
  //         }
  //         current = current.next
  //       }
  //       current.next = node
  //     }
  //   }

  add(node) {
    if (!this.head) {
      this.head = node
      return
    }
    let current = this.head
    if (node.data <= current.data) {
      this.head = node
      node.next = current
      return
    }

    let prev = current
    current = current.next
    while (current) {
      if (current.data >= node.data) {
        prev.next = node
        node.next = current
        return
      }
      prev = current
      current = current.next
    }
    prev.next = node
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
}

export default SortedLinkedList
