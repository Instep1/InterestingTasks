const input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gbp', 'buy', 9000],
    ['eur', 'sell', 7000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 25000],
];

const output = {
    usd: [10000, 30000],
    gbp: [9000, 0],
    eur: [0, 7000],
    uah: [10000, 0]
}

console.log(output.usd[0])


function currenciesMoney(arrWithData) {
    const objWithOperations = {};

    arrWithData.forEach(operation => {
        const currencie = operation[0];
        const typeOperation = operation[1];
        const amountOperation = operation[2];
        if (!objWithOperations[currencie]) {
            objWithOperations[currencie] = [0, 0];
        }

        objWithOperations[currencie][typeOperation === 'buy' ? 0 : 1] += amountOperation

    })


    return objWithOperations;
}

console.log(currenciesMoney(input));