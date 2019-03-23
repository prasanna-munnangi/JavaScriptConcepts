// add the elements of an existing array into a new array

var toAdd = [1, 2, 3];
var data = [...toAdd, 4];
console.log(data); // [1, 2, 3, 4]


// pass elements of an array as arguments to a function

function addThreeNumbers(x, y, z) {
    console.log(x + y + z);
};

var args = [0, 1, 2];
addThreeNumbers(...args);


// copy arrays

var arr = [1, 2, 3];
var arr2 = [...arr]; // lllike arr.slice()


// spread operator using objects;

const address = {
    city: 'LA',
    country: 'USA',
    postCode: '98403'
};

const name = {
    firstName: 'John',
    lastName: 'Smith',
};

const person = { ...name, ...address };

console.log(person);