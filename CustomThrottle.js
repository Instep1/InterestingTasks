'use strict'

function customThrottle (fn, ms) {
    let isThrottled = false;
    let saveArgs = null;
    let saveThis = null;

    function wrapper() {
        if (isThrottled) {
            saveArgs = arguments;
            saveThis = this;
            return; 
        }

        fn.apply(this, arguments);

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
            if (saveArgs) {
                wrapper.apply(saveThis, saveArgs);
                saveArgs = null;
                saveThis = null;
            }
        }, ms);
    }

    return wrapper;
}