function fibonacci(n) {
  let a = 0
  let b = 1
  if (n <= 0) return a
  if (n === 1) return b
  for (let i = 2; i <= n; i++) {
    let temp = a
    a = b
    b = temp + b
  }
  return b
}

function fibonacci2(n) {
  if (n == 0) return 0
  if (n == 1) return 1
  return fibonacci2(n - 1) + fibonacci2(n - 2)
}

function fact(n) {
  if (n <= 0) return 0
  if (n == 1) return 1
  return n * fact(n - 1)
}

function reversePrint(n) {
  while (parseInt(n / 10) > 0) {
    console.log(n % 10)
    n = parseInt(n / 10)
  }
  console.log(n)
}

function reversePrint2(n) {
  while (n > 0) {
    console.log(n % 10)
    n = reversePrint2(parseInt(n / 10))
  }
  console.log(n)
}

export { fibonacci, fibonacci2, fact, reversePrint, reversePrint2 }
