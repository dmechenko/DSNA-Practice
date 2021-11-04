/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".*/

// Time: O(n^2) Space: O(n)
const longestCommonPrefix = (strs) => {
  if (!strs.length) return ''; //edge case

  for (let i = 0; i < strs[0].length; i++) {
    // iterate through the first string in the array
    for (let str of strs) {
      // iterate through all the strings in the array
      if (str[i] !== strs[0][i]) return str.slice(0, i); //if the character at str[i] is not the first string's character at [i], return current string up to i
    }
  }
  return strs[0]; //if all the strings are the same, return the first string.
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // output: 'fl'
console.log(longestCommonPrefix(['apple', 'apply', 'ape', 'at'])); // output: 'a'
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower'])); // output: 'flower'
