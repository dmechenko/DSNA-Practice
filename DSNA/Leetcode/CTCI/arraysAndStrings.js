// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const isUnique = (str) => {
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) {
      hash[str[i]] = 1;
    } else {
      hash[str[i]] += 1;
    }
  }

  return Object.values(hash).length === 1;
  // .some((val) => val === str.length);
};

// console.log(isUnique('aaaa'));
// console.log(isUnique('bbaa'));
// console.log(isUnique('abcd'));

// Given two strings, write a method to decide if one is a permutation of the other.

const isPermutation = (str1, str2) => {
  const newStr1 = str1.split('').sort().join('');
  const newStr2 = str2.split('').sort().join('');

  return newStr1 === newStr2;
};

// console.log(isPermutation('orange', 'naroeg'));
// console.log(isPermutation('oranges', 'naroego'));

// Write a method to replace all spaces in a string with "%20"
// Input: "Mr John Smith    "
// Output: "Mr%20John%20Smith"

const URLify = (str) => {
  //test
};
