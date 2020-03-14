function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function heapify(arr, len, i) {
  let max = i
  let c1 = 2 * i + 1
  let c2 = 2 * i + 2
  if (c1 < len && arr[c1] > arr[max]) {
    max = c1
  }
  if (c2 < len && arr[c2] > arr[max]) {
    max = c2
  }
  if (max !== i) {
    swap(arr, i, max)
    heapify(arr, len, max)
  }
}

function heapBuild(arr, len) {
  let lastNode = len - 1
  let parent = parseInt((lastNode - 1) / 2)
  for (let i = parent; i >= 0; i--) {
    heapify(arr, len, i)
  }
}

function heapSort(arr) {
  let len = arr.length
  heapBuild(arr, len)
  for (let i = len - 1; i >= 0; i--) {
    swap(arr, 0, i)
    heapify(arr, i, 0)
  }
}

export default heapSort
