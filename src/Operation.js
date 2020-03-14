function isNumber(letter) {
  if (letter.charCodeAt() >= 48 && letter.charCodeAt() <= 57) {
    return letter.charCodeAt() - 48
  } else {
    return false
  }
}

function operation(str) {
  const len = str.length
  const stack = []
  let i = 0
  let a
  let b
  let num
  while (i < len) {
    num = isNumber(str.charAt(i))

    if (num) {
      stack.push(num)
    }

    switch (str.charAt(i)) {
      case '+':
        a = stack.pop()
        b = stack.pop()

        if (a !== null && b !== null) {
          stack.push(a + b)
          break
        } else {
          return null
        }

      case '-':
        a = stack.pop()
        b = stack.pop()
        if (a !== null && b !== null) {
          stack.push(b - a)
          break
        } else {
          return null
        }

      case '*':
        a = stack.pop()
        b = stack.pop()
        if (a !== null && b !== null) {
          stack.push(a * b)
          break
        } else {
          return null
        }

      case '/':
        a = stack.pop()
        b = stack.pop()
        if (a !== null && b !== null) {
          stack.push(parseInt(b / a))
          break
        } else {
          return null
        }
    }
    i++
  }

  if (stack.length !== 1) {
    return null
  } else {
    return stack.pop()
  }
}

export { isNumber, operation }
