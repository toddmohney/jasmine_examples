
function isPrime(number) {
  if(!isPrime.primes) { isPrime.primes = {} }

  var result = number != 1;

  for(var i=2; i < number; i++) {
    if(number % i === 0) {
      result = false;
      break;
    }
  }

  return isPrime.primes[number] = result;
};


describe("isPrime", function() {
  describe("called with a prime number", function() {
    it("returns true", function() {
      expect(isPrime(5)).toEqual(true);
      expect(isPrime(13)).toEqual(true);
      expect(isPrime(17)).toEqual(true);
    });

    it("memoizes the result", function() {
      expect(isPrime.primes[5]).toEqual(true);
      expect(isPrime.primes[13]).toEqual(true);
      expect(isPrime.primes[17]).toEqual(true);
      expect(isPrime.primes[999]).toEqual(undefined);
    });
  });

  describe("called with a non-prime number", function() {
    it("returns false", function() {
      expect(isPrime(4)).toEqual(false);
      expect(isPrime(12)).toEqual(false);
      expect(isPrime(18)).toEqual(false);
    });

    it("memoizes the result", function() {
      expect(isPrime.primes[4]).toEqual(false);
      expect(isPrime.primes[12]).toEqual(false);
      expect(isPrime.primes[18]).toEqual(false);
      expect(isPrime.primes[999]).toEqual(undefined);
    });
  });
});
