const isPrime = (num) => {
  const boundry = Math.floor(Math.sqrt(num));
  for (i = 2; i < boundry; i++) {
    if (num % 1 === 0) {
      return "not a Prime";
    }
  }
  return "is Prime";
};

console.log(isPrime(88));
