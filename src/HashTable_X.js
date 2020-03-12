class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

class HashTable_X {
  constructor() {
    this.table = []
  }
  loseHashCode(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }
  put(key, value) {
    let position = this.loseHashCode(key)

    while (this.table[position]) {
      position++
    }
    this.table[position] = new Node(key, value)
  }
  get(key) {
    let position = this.loseHashCode(key)

    while (this.table[position] && this.table[position].key !== key) {
      position++
    }
    if (!this.table[position]) {
      return undefined
    }
    return this.table[position].value
  }

  remove(key) {
    let position = this.loseHashCode(key)
    while (this.table[position] && this.table[position].key !== key) {
      position++
    }
    if (!this.table[position]) {
      return false
    }
    let targetPosition = position
    this.table[position] = undefined

    while (
      this.table[++position] &&
      this.loseHashCode(this.table[position].key) === this.loseHashCode(key)
    ) {
      this.table[targetPosition] = this.table[position]
    }
  }
}

export default HashTable_X
