'use strict'

const s = "A man, a plan, a canal: Panama"
const f = "race a car"
const u = 'a.'

const isPalindrome = function(s) {
  let oldString = s.replace(/[\s\W_]+/g, '').toLowerCase();
  let newString = Array.from(s.toLowerCase()).reverse().join(' ').replace(/[\s\W_]+/g, '');
  return (oldString === newString);
};

console.log(isPalindrome(u));