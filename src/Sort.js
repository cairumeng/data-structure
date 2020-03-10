function bubbleSort(arr) {
  const length = arr.length
  if (length === 0 || length === 1) return arr
  for (let j = length - 1; j >= 1; j--) {
    for (let i = 0; i <= length - 2; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = tmp
      }
    }
  }
  return arr
}

function selectSort(arr) {
  const length = arr.length

  for (let j = 0; j < length - 2; j++) {
    let min = length - 1
    for (let i = length - 1; i >= j; i--) {
      if (arr[i] < arr[min]) {
        min = i
      }
    }

    let tmp = arr[min]
    arr[min] = arr[j]
    arr[j] = tmp
  }
  return arr
}

function insertionSort(arr) {
  const len = arr.length
  if (len === 0 || len === 1) return arr
  let target
  let i, t
  for (t = 1; t < len; t++) {
    target = arr[t]
    for (i = t - 1; i >= 0; i--) {
      if (target >= arr[i]) {
        arr[i + 1] = target
        break
      } else {
        arr[i + 1] = arr[i]
      }
    }
    if (i === -1) {
      arr[0] = target
    }
  }
  return arr
}

export { bubbleSort, selectSort, insertionSort }
