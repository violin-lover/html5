const leastCM = function (a, b) {
  for (let m = 1; ; m++) {
    if ((a * m) % b === 0) { return a * m }
  }
}

 const factorize = function(num) {
            let factors = [];
            for (let f = 1; f <= num; f++) {
                if (num % f === 0) {
                    factors.push(f)
                }
            }
            return factors;
        }

const gCD = function(numA, numB) {
            let cdMax = 1;
            for (let fAA = factorize(numA), fAB = factorize(numB); fAA.length > 0 && fAB.length > 0;) {
                if (fAA[fAA.length - 1] === fAB[fAB.length - 1]) {
                    cdMax = fAA[fAA.length - 1]
                    return cdMax;
                }

                if (fAA[fAA.length - 1] < fAB[fAB.length - 1]) {
                    fAB.pop();
                } else {
                    fAA.pop()
                }
            }
        }

        const EGCD = function(a, b) {
            debugger;
            if (a * b === 0) {return a + b}
            if (a < b) {[a, b] = [b, a]}
            return EGCD(b, a % b)
        }

        