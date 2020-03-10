class Queue {
  arr = []
  head = 0
  tail = 0
  constructor(maxLen) {
    this.maxLen = maxLen
  }

  length() {
    // console.log('头尾', this.head, this.tail)
    // if (this.isEmpty()) return 0
    // if (this.tail >= this.head) {
    //   return this.tail - this.head
    // } else {
    //   console.log('长度', this.maxLen - 1 + this.head - this.tail)
    //   return this.maxLen - 1 + this.head - this.tail
    // }
    if (this.tail === this.head) return 0
    if (this.tail > this.head) return this.tail - this.head
    else return this.maxLen - this.head + this.tail + 1
  }

  isEmpty() {
    return this.length() === 0
  }

  enqueue(el) {
    if (this.length() < this.maxLen) {
      this.arr[this.tail] = el
      this.tail = (this.tail + 1) % (this.maxLen + 1)
    }
  }

  dequeue() {
    if (this.length() > 0) {
      let result = this.arr[this.head]
      this.head = (this.head + 1) % (this.maxLen + 1)
      return result
    }
    return null
  }
}

export default Queue
