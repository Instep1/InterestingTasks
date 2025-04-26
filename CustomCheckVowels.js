'use strict';

const vowels = new Set(['a', 'e', 'y', 'u', 'o', 'i']);
const data = 'Alex';

function findVowels(string) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowels.has(string[i].toLowerCase())) counter++;
    }
    return counter;
}

console.log(findVowels(data));