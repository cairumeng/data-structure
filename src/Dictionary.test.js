import Dictionary from './Dictionary'

describe('Dictionary', () => {
  it('Dictionary', () => {
    const dico = new Dictionary()
    expect(dico.has('name')).toBe(false)
    dico.add('name', 'red maison')
    expect(dico.has('name')).toBe(true)
    dico.add('price', 3)
    dico.add('price2', 5)
    dico.add('author', 'rumeng')
    expect(dico.get('price2')).toBe(5)
    expect(dico.delete('price2'))
    expect(dico.get('price2')).toBe(undefined)
  })
})
