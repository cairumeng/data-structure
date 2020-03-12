import LinkedList from './LinkedList'

class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
  }
}

class HashTable_L {
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
    let node = new Node(key, value)
    if (!this.table[position]) {
      this.table[position] = new LinkedList()
    }
    this.table[position].add(node)
  }

  get(key) {
    let position = this.loseHashCode(key)
    if (this.table[position]) {
      let result = this.table[position].find((node) => node.key === key)
      if (result) {
        return result.value
      }
      return undefined
    }
  }

  remove(key) {
    let position = this.loseHashCode(key)

    if (this.table[position]) {
      this.table[position].remove((node) => node.key === key)
    } else {
      return false
    }
    if (this.table[position].length() === 0) {
      this.table[position] = undefined
    }
  }
}

export default HashTable_L
