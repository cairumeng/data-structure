class HashTable {
  constructor() {
    this.table = []
  }
  // loseHashCode 这种散列函数希哈碰撞率比较高
  // loseHashCode(key) {
  //   let hash = 0
  //   for (let i = 0; i < key.length; i++) {
  //     hash += key.charAtCode(i)
  //   }
  //   return hash % 37
  // }

  // djb2HahsCode 碰撞率更低

  djb2HashCode(key) {
    let hash = 5381
    for (let i = 0; i < key.length; i++) {
      hash += hash * 33 + key.charAtCode(i)
    }
    return hash % 1013
  }

  put(key, value) {
    this.table[this.loseHashCode(key)] = value
  }
  remove(key) {
    this.table[this.loseHashCode(key)] = undefined
  }
  get(key) {
    return this.table[this.loseHashCode(key)]
  }
}

export default HashTable
