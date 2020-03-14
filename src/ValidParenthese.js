function ValidParenthese(str) {
  const stack = []
  for (let i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case '(':
      case '[':
      case '{':
        stack.push(str.charAt(i))
        break

      case ')':
        if (stack.pop() !== '(') return false
        break
      case ']':
        if (stack.pop() !== '[') return false
        break
      case '}':
        if (stack.pop() !== '{') return false
        break
      default:
      // code block
    }
  }
  return stack.length === 0
}

export default ValidParenthese
