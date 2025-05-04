function sumOfTwo(arr, target) {
    const arrWithIndexes = [];
    for (let i = 0; i < arr.length; i++) {
        for (let k = 1; k < arr.length; k++) {
            if (k === i) continue;
            if (arr[i] + arr[k] === target) {
                arrWithIndexes.push(i);
                arrWithIndexes.push(k);
                break;
            }
        }
    }
    return arrWithIndexes;
}

console.log(sumOfTwo([2, 7, 11, 15], 13))


function sumOfTwoWithObject(arr, target) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = i;
    }
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i]

        if (obj[diff] && obj[diff] !== i) {
            return [i, obj[diff]]
        }
    }
    return [];
}

console.log(sumOfTwoWithObject([2, 7, 11, 15], 14))