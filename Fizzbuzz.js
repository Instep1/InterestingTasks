const array = [1, 2, 3, 4, 5, 6, 7, 8, 120];

function fizzbuzz(arr) {
    const newArr = arr.map((item, i) => {
        const checkDivorceThree = (item % 3) === 0
        const checkDivorceFive = (item % 5) === 0

        return checkDivorceThree && checkDivorceFive ? item[i] = 'fizzbuzz' : checkDivorceThree ? item[i] = 'fizz' : checkDivorceFive ? item[i] = 'buzz' : item;
    }) 
    return newArr;
}

console.log(fizzbuzz(array));