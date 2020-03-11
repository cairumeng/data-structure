class Dictionary {
  dico = {}
  has(key) {
    return this.dico.hasOwnProperty(key)
  }
  add(key, value) {
    this.dico[key] = value
  }
  delete(key) {
    if (this.has(key)) {
      delete this.dico[key]
      return true
    }
    return false
  }
  get(key) {
    if (this.has(key)) {
      return this.dico[key]
    }
    return undefined
  }
}

export default Dictionary
