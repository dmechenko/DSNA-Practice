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
