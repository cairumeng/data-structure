function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

//取pivot
function medium3(arr, left, right) {
  const center = parseInt((left + right) / 2)
  if (arr[left] > arr[center]) {
    swap(arr, left, center)
  }
  if (arr[left] > arr[right]) {
    swap(arr, left, right)
  }
  if (arr[center] > arr[right]) {
    swap(arr, center, right)
  }

  swap(arr, center, right - 1)
  return arr[right - 1]
}

function partition(arr, left, right) {
  if (right - left < 2) {
    if (arr[left] > arr[right]) {
      swap(arr, left, right)
    }
    return
  }

  let pivot = medium3(arr, left, right)
  let i = left
  let j = right - 1

  while (true) {
    while (arr[++i] < pivot) {}
    while (arr[--j] > pivot) {}

    if (i < j) {
      swap(arr, i, j)
    } else {
      break
    }
  }
  swap(arr, i, right - 1)
  partition(arr, left, i - 1)
  partition(arr, i + 1, right)
}

function QuickSort(arr) {
  if (arr.length < 2) return
  partition(arr, 0, arr.length - 1)
}

export default QuickSort
export { medium3 }
