function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function maxDivisorTree(n) {
  if (isPrime(n)) return 0;
  let height = 0;

  while (n > 1) {
    hasFactor = false;
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        n = n / i;
        hasFactor = true;
      }
    }
    height++;
    if (!hasFactor) break;
  }

  return height;
}

console.log(maxDivisorTree(16));
console.log(maxDivisorTree(17));
