function isReallyANumber(num) {
   return typeof num === 'number' && num !== Infinity && !isNaN(num);
}

function multiply(a, b) {
    return a * b
}

/*
function multiplyAll(...numbers) {
    let result = 1;
    for(let n of numbers) {
        if(isReallyANumber(n)) {
            result *= n;
        }
    }
    return result;
}
*/

function multiplyAll(...numbers) {
    return numbers.filter(isReallyANumber).reduce(multiply, 1);
}

// This is an named export in Node.js
exports.multiplyAll = multiplyAll;

// That would be a default export:
// module.exports = multiplyAll


/*
    
*/