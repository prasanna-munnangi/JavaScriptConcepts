// The destructuring assignment syntax is JavaScript expression that
// makes it possible to unpack values from arrays, or properties from objects,
// into distinct variables

const data = [10, 20];

const [first, second] = data;

// When destructuring an array, you can unpack and assign the remaining part of it
// to a variable using the rest pattern
const [a, ...b] = [1, 2, 3];

console.log(a); // 1
console.log(b); // [2, 3];

// object destructuring

let instance = {
    title: 'JavaScript',
    age: 2,
    city: 'Chicago'
};

const { title, age } = instance; // two consts with same name as properties
const { title: one, age: two } = instance; // two variables with the property renaming