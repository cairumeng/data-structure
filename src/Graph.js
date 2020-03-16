import Queue from './Queue'
import ArrStack from './ArrStack'

class Graph {
  vertices = []
  edges = {}

  addVertices(v) {
    this.vertices.push(v)
    this.edges[v] = []
  }

  addEdge(a, b) {
    this.edges[a].push(b)
    this.edges[b].push(a)
  }

  traverse(root, fn) {
    let colors = {}
    let distance = {}
    let prev = {}
    for (let i = 0; i < this.vertices.length; i++) {
      colors[this.vertices[i]] = 'white'
      distance[this.vertices[i]] = 0
      prev[this.vertices[i]] = null
    }

    let queue = new Queue(10)
    queue.enqueue(root)

    while (!queue.isEmpty()) {
      let v = queue.dequeue()
      for (let j = 0; j < this.edges[v].length; j++) {
        let w = this.edges[v][j]
        if (colors[w] === 'white') {
          queue.enqueue(w)
          colors[w] = 'grey'
          prev[w] = v
          distance[w] = distance[v] + 1
        }
      }
      colors[v] = 'black'
      if (fn) {
        fn(v)
      }
    }
    return { colors, distance, prev }
  }

  traverse2visit(v, colors, fn, path) {
    colors[v] = 'grey'
    if (fn) {
      path.push(fn(v))
    }
    let edges = this.edges[v]
    for (let i = 0; i < edges.length; i++) {
      let vertical = edges[i]
      if (colors[vertical] === 'white') {
        this.traverse2visit(vertical, colors, fn, path)
      }
    }
    colors[v] = 'black'
  }

  traverse2(root, fn) {
    let colors = {}
    let path = []

    for (let i = 0; i < this.vertices.length; i++) {
      colors[this.vertices[i]] = 'white'
    }

    this.traverse2visit(root, colors, fn, path)
    return path
  }

  getVertices() {
    return this.vertices
  }
  getList() {
    return this.edges
  }

  getPath(from, to) {
    let result = this.traverse(from)
    let path = new ArrStack(10)
    while (to !== from) {
      path.push(to)
      to = result.prev[to]
    }
    path.push(to)
    let str = ''

    while (!path.isEmpty()) {
      str += path.pop() + '-'
    }
    str = str.slice(0, str.length - 1)
    return str
  }
}

export default Graph
