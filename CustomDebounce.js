'use strict'

const customDebounce = (fn, ms) => {
    let timer = null;
    
    return function(...args) {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fn(...args)
        }, ms)
    }

}

const clg = (a) => console.log('log:', a)
const debLog = customDebounce(clg, 3000)
debLog(1)
debLog(2)


const customDebounce2 = (fn, ms) => {
    let timer = null;

    return function() {
        const fnCall = () => {
            fn.apply(this, arguments)
        }
        clearTimeout(timer);
        timer = setTimeout(fnCall, ms)
    }
}

const clg2 = (a) => console.log('log:', a)
const debLog2 = customDebounce2(clg2, 3000)
debLog2(1)
debLog2(2)