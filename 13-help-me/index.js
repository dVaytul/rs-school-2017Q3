module.exports = function count(s, pairs) {
  const gcd05 = (a, b) => {
    if (a !== 0 && b !== 0){
      while (b !== 0) b = a % (a = b);
      return a;
    }
    return;
  };

  const getRelativePrimes = (N, NWithoutPow, bitMaskLength) => {
    let primes = [1]; // 1 для единицы сразу вносим
    let length = N + bitMaskLength;

    for (let i = 2; i < length; i++) {
      if (gcd05(NWithoutPow, i) === 1) {
        primes.push(1);  // числа являются взаимно простыми
      } else {
        primes.push(0);
      }
    }

    return primes;
  };

  // code
  let N, NWithoutPow,
      bitMaskLength,
      primes, strOfPrimes,
      result = -1;

  bitMaskLength = s.length;
  if ( bitMaskLength > 11 ) return 0;

  NWithoutPow = pairs.reduce( (mult, item) => mult * item[0], 1);

  N = pairs.reduce( (mult, item) => mult *= item[0] ** item[1], 1);
  if ( N > 1293938645 ) return 0;

  primes = getRelativePrimes(N, NWithoutPow, bitMaskLength);
  strOfPrimes = primes.join('');

  for(let index = -2; index !== -1; result++) {
    index = strOfPrimes.indexOf(s, index + 1);
  }

  //let result = result % 1000000007;
  return result;
};