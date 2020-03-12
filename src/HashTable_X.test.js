import HashTable_X from './HashTable_X'

describe('HashTable_X', () => {
  it('put', () => {
    const hashTable = new HashTable_X()
    // hashTable.put('steve', 'steve@gmail.com')
    // expect(hashTable.get('steve')).toBe('steve@gmail.com')
    hashTable.put('Ana', 'ana@gmail.com')
    hashTable.put('Donnie', 'donie@gmail.com')
    // expect(hashTable.get('Donie')).toBe(undefined)
    // expect(hashTable.remove('Donie')).toBe(false)
    // expect(hashTable.get('Donnie')).toBe('donie@gmail.com')
    // expect(hashTable.get('Ana')).toBe('ana@gmail.com')
    // hashTable.remove('steve')
    // expect(hashTable.get('steve')).toBe(undefined)
    hashTable.remove('Ana')
    expect(hashTable.get('Ana')).toBe(undefined)
    expect(hashTable.get('Donnie')).toBe('donie@gmail.com')
  })
})
