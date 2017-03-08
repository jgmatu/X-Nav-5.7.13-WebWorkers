var calcPrimes = function (n) {
      var prime = 1;
      primelist = "";
      search: while (prime < n) {
            prime = prime + 1;
            for (var i = 2; i <= Math.sqrt(n); i++) {
                  if (prime % i == 0) {
                        continue search;
                  }
            }
            // found a prime!
            primelist += " " + prime;
      }
      return primelist;
}

self.onmessage = function (event) {
      console.log("Reciving... " + event.data);
      var primes = calcPrimes(parseInt(event.data));
      console.log(primes);
      self.postMessage(primes);
}
