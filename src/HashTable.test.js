import HashTable from './HashTable'

describe('HashTable', () => {
  it('put', () => {
    let hashTable = new HashTable()
    hashTable.put('jobs', 'jobs@gmail.com')
    expect(hashTable.get('jobs')).toBe('jobs@gmail.com')
    hashTable.put('steve', 'steve@gmail.com')
    expect(hashTable.get('steve')).toBe('steve@gmail.com')
    hashTable.put('rumeng', 'rumeng@gmail.com')
    expect(hashTable.get('rumeng')).toBe('rumeng@gmail.com')
    hashTable.remove('rumeng')
    expect(hashTable.get('rumeng')).toBe(undefined)
  })
})
