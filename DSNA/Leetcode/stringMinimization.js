// Given a string of a, b, c, minimize the length of the string by applying the following operation:
/* 
  1. Divide the string into two non-empty parts, left and right.
  2. Without reversing any of the parts, swap them with each other by appending the left to the end of the right part.
  3. If the suffix of the right part and the prefix of the left part contain the same character, then remove the character from both parts.
  4. Repeat until you can't.
*/
// Determine the minimum length of the string

function strMin(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end && str[start] === str[end]) {
    let char = str[start];
    while (start <= end && str[start] === char) start++;
    while (start <= end && str[end] === char) end--;
  }

  return end + 1 - start;
}

console.log(strMin('aabcccabba')); // => Should return 4

// cc cab
