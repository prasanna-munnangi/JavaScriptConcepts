// forEach function takes a single argument, the individual member of the array
// the return statement does absolutely nothing.
// any action you take must affect something

const names = ['walter', 'white'];
let capitalized = [];
names.forEach((name) => capitalized.push(name.toUpperCase()));