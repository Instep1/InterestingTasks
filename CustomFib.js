// Решение циклом

function fib(num) {
    let prevState = 0;
    let nextState = 1;
    let resultState = 0

    if (num <= 1) return num;

    for (let i = 1; i <= num - 1; i++) {
        resultState = prevState + nextState;
        prevState = nextState;
        nextState = resultState;
    }

    return resultState;
}

console.log(fib(5));


// Решение рекурсией

const fib = function (queryNumber) {
    let countIteration = 1;

    let prevStateNumberValue = 0;
    let nextStateNumberValue = 1;

    if (queryNumber <= 1) return queryNumber;

    const recursionFibonachi = (prevCount, nextCount) => {
        if (queryNumber === countIteration) return nextStateNumberValue;

        nextStateNumberValue = prevCount + nextCount;
        prevStateNumberValue = nextCount;
        ++countIteration

        recursionFibonachi(prevStateNumberValue, nextStateNumberValue);
    };

    recursionFibonachi(prevStateNumberValue, nextStateNumberValue);

    return nextStateNumberValue;
};


console.log(fib(10));



function fib(num) {
    if (num < 2) {
        return num;
    }

    return fib(num - 1) + fib(num - 2)
}


// Результат записан в строке + несколько условий

function fib(initial) {
    if (typeof (initial) !== 'number') return '';
    if (!((initial % 1) === 0)) return '';
    if (initial === 1) return '0';
    if (initial === 0) return '';

    let result = '0 1';
    let prevState = 0;
    let nextState = 1;
    let sumState = 0;
    for (let i = 1; i <= initial - 2; i++) {
        sumState = prevState + nextState;
        result += ` ${sumState}`
        prevState = nextState;
        nextState = sumState;
    }

    return result;
}