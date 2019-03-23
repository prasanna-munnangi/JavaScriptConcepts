// every() tests whether all elements in the array pass the
// test implemented by the provided function

const array = [1, 20, 30, 39, 13];

console.log(array.every(val => val < 40));

// rest operators, converts the args into array
// rest operators aren't just for parameters. It works for pulling the remaining
// key-values from objects or the remaining values from arrays
// rest element must be last element when destructuring an array

function getArguments(...args) {
    return args;
}

console.log(getArguments('abcd', 'efgh'), 'result after using rest operator');

// shift functionality using rest operator


const queue = ['stop', 'collaborate', 'listen'];
const [first, ...remaining] = queue;
console.log(first);
console.log(...remaining);
console.log(queue);