class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree {
  root = null

  insertNode(node, newNode) {
    if (newNode.value >= node.value) {
      if (node.right == null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    } else {
      if (node.left == null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    }
  }

  //插入
  insert(value) {
    const newNode = new Node(value)

    if (this.root == null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  traverseNode(fn, node) {
    if (node) {
      fn(node)
      this.traverseNode(fn, node.left)
      this.traverseNode(fn, node.right)
    }
  }

  //遍历
  traverse(fn) {
    this.traverseNode(fn, this.root)
  }

  searchNode(node, value) {
    if (node == null) {
      return null
    }
    if (node.value === value) {
      return node
    }
    return (
      this.searchNode(node.left, value) || this.searchNode(node.right, value)
    )
  }

  //搜索
  search(value) {
    return this.searchNode(this.root, value)
  }

  removeNode(node, value, parent) {
    if (node == null) {
      return null
    }

    if (node.value === value && parent == null) {
      const result = this.root
      this.root = null
      return result
    }

    if (node.value === value) {
      return node
    }

    const leftResult = this.removeNode(node.left, value, node)
    if (leftResult) {
      if (value === node.left.value) {
        node.left = null
      }
      return leftResult
    }

    const rightResult = this.removeNode(node.right, value, node)
    if (rightResult) {
      if (value === node.right.value) {
        node.right = null
      }
      return rightResult
    }

    return null
  }

  //删除
  remove(value) {
    return this.removeNode(this.root, value, null)
  }

  minNode(node) {
    while (node && node.left) {
      node = node.left
    }
    return node
  }

  min() {
    if (this.root == null) {
      return null
    } else {
      return this.minNode(this.root)
    }
  }
  maxNode(node) {
    while (node && node.right) {
      node = node.right
    }
    return node
  }
  max() {
    if (this.root == null) {
      return null
    } else {
      return this.maxNode(this.root)
    }
  }
}

export { Tree, Node }
