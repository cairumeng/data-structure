class Set {
  obj = {}
  has(value) {
    return this.obj.hasOwnProperty(value)
  }
  add(value) {
    if (!this.has(value)) {
      this.obj[value] = value
      return value
    }
    return false
  }

  remove(value) {
    if (this.has(value)) {
      delete this.obj[value]
      return true
    }
    return false
  }

  clear() {
    this.obj = {}
  }

  size() {
    //     let count = 0
    //     //i is key
    //     for (let i in obj) {
    //       if (this.obj.hasOwnProperty(i)) {
    //         count++
    //       }
    //     }
    //     return count
    //   }
    return Object.keys(this.obj).length
  }
  values() {
    return Object.values(this.obj)
    // let values = []
    // for (let i in this.obj) {
    //   if (this.obj.hasOwnProperty(i)) {
    //     values.push(this.obj[i])
    //   }
    // }
    // return values
  }

  union(set2) {
    const result = new Set()
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      result.add(values[i])
    }
    values = set2.values()
    for (let j = 0; j < values.length; j++) {
      result.add(values[j])
    }
    return result
  }

  intersection(set2) {
    let result = new Set()
    let values = set2.values()
    for (let j = 0; j < values.length; j++) {
      if (this.has(values[j])) {
        result.add(values[j])
      }
    }
    return result
  }

  difference(set2) {
    const result = new Set()
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      result.add(values[i])
    }
    values = set2.values()
    for (let j = 0; j < values.length; j++) {
      if (result.has(values[j])) {
        result.remove(values[j])
      }
    }
    return result
  }
}

export default Set
