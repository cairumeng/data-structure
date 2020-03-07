class ArrStack {
  arr = []
  len = 0

  constructor(maxLen) {
    this.maxLen = maxLen
  }

  length() {
    return this.len
  }

  isEmpty() {
    return this.len === 0
  }

  peek() {
    return this.isEmpty() ? null : this.arr[this.len - 1]
  }

  push(el) {
    if (this.len < this.maxLen) {
      this.arr[this.len++] = el
    }
  }

  pop() {
    if (this.isEmpty(this.arr)) {
      return null
    }
    const result = this.arr[this.len - 1]
    this.len--
    return result
  }
}

export default ArrStack
