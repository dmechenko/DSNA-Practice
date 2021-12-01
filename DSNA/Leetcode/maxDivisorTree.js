function maxDivisorTree(n) {
  let height = 0;
  while (n > 1) {
    let hasFactor = false;
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        n = Math.floor(n / i);
        hasFactor = true;
        break;
      }
    }
    height++;
    if (!hasFactor) break;
  }
  return height;
}

console.log(maxDivisorTree(16));
