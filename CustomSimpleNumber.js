function reallySimpleNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        } 
    }
    return num > 1;
}

console.log(reallySimpleNumber(5))


function getPrimes(num) {
    const arrWithSimpleNumber = [];
    for (let i = 2; i < num; i++) {
        let isPrime = true;
        for (let k = 2; k < i; k++ ) {
            if (i % k === 0) {
                isPrime = false
                break;
            }
        }
        if (isPrime) arrWithSimpleNumber.push(i);
    }
    return arrWithSimpleNumber;
}

console.log(getPrimes(10))


function getPrimesSeive(num) {
    const seive = [];
    const primes = [];
    for (let i = 2; i <= num; i++) {
        if(!seive[i]) {
            primes.push(i);
            for(let k = i * 2; k < num ; k += i) {
                seive[k] = true;
                console.log(seive)
            }
        }
    }

    return primes;
}

console.log(getPrimesSeive(120))
