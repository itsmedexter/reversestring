// Reverse a string basic forloop

// write a function named reverse that takes in a string
function reverse(str) {
  // variable name reversed that equals a string
  let reversed = '';
  // for loop that starts from i to string length then -1 to start from end of string, iterate backwards
  for (let i = str.length - 1; i >= 0; i--) {
    // variable is reversed
    reversed += str[i];
  }
  // return variable
  return reversed;
}