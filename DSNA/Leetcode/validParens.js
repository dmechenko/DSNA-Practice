// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Input: s = "()[]{}"
// Output: true

// Input: s = "([)]"
// Output: false

function validParens(str) {
  let stack = []; //initialize empty stack
  for (let i = 0; i < str.length; i++) {
    //iterate through the given string
    let ele = str[i]; //set a variable to be the element at string's current index
    switch (ele) {
      case '(': //each time there's an opening bracket, push a closing bracket to the end of the stack
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        //if a closing bracket is encountered, pop off the last element in the stack and compare
        if (ele !== stack.pop()) return false; //if the closing bracket at str[i] is not the same closing bracket at the end of the stack, return false
    }
  }
  return !stack.length; //if all the brackets have corresponding closing brackets, then the stack will have a length of 0, yielding true.
}

console.log(validParens('()[]{}'));
console.log(validParens('([)]'));
console.log(validParens('()))))))'));
