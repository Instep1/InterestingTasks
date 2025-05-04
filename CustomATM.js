'use strict'

//REQUIREMENTS:
// 1. Always deliver the lowest number of possible notes;
//2. It's possible to get the amount requested with available notes;
// 3. The client balance is infinite;
// 4. Amount of notes is infinite;
// 5. Available notes 100, 50, 20 10


function withdrawCashATM(amountRequired) {

    const typeNotes = {
        100: Infinity,
        50: Infinity,
        20: Infinity,
        10: Infinity
    };

    let reminderValue = amountRequired;

    const result = Object.keys(typeNotes).sort((a, b) => b - a).reduce((acc, keyNotes) => {

        const countNotes = Math.trunc(reminderValue / keyNotes);

        reminderValue -= keyNotes * countNotes;

        if (countNotes === 0) return acc;

        acc[keyNotes] = countNotes;

        return acc;

    }, {})


    return result;

}

console.log(withdrawCashATM(160));





const withdrawCashATM = (queryAmount, limits) => {
    if (queryAmount % 10 !== 0) return { success: false, message: "Сумма должна быть кратна 10." };
  
    let remainderAmount = queryAmount;
    const limitsNotes = Object.keys(limits).sort((a, b) => b - a);
    const withdrawCashAmount = limitsNotes.reduce((acc, keyNotes) => {
      const countNotes = Math.trunc(remainderAmount / +keyNotes);
  
      if (limits[keyNotes] > 0 && countNotes > 0) {
        const canWithdraw = Math.min(countNotes, limits[keyNotes]);
        limits[keyNotes] -= canWithdraw;
        remainderAmount -= canWithdraw * keyNotes;
        acc[keyNotes] = canWithdraw;
      }
  
      return acc;
    }, {});
  
    if (remainderAmount > 0) {
      return { success: false, message: "Не удаётся выдать запрашиваемую сумму." };
    }
  
    return { success: true, withdrawCashAmount };
  };

let limits = { 1000:75, 500: 2, 100: 5, 50: 100, 30: 6 };


console.log(withdrawCashATM(230, limits)); // {30: 1, 100: 2}
console.log(withdrawCashATM(1000, limits)); // {1000:1}
console.log(withdrawCashATM(200, limits)); // {100:2}
console.log(withdrawCashATM(150, limits)); // {50: 1, 100: 1}
console.log(withdrawCashATM(120, limits)); // {30: 4}
console.log(withdrawCashATM(275, limits));