const PUBNUMPRIMES = 100;

var calcPrimes = function (n) {
      var prime = 1, nPrimes = 0;
      var primelist = "";
      search: while (prime < n) {
            prime = prime + 1;
            for (var i = 2; i <= Math.sqrt(prime); i++) {
                  if (prime % i == 0) {
                        continue search;
                  }
            }
            // found a prime!
            primelist += " " + prime;
            nPrimes = nPrimes + 1;

            if (nPrimes % PUBNUMPRIMES == 0) {
                  self.postMessage(primelist);
                  primelist = "";
            }
      }
      self.postMessage(primelist);
}

self.onmessage = function (event) {
      calcPrimes(parseInt(event.data));
}
