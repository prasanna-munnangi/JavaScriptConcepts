// Higher order function is merely a function that returns
// another function, the initial parameter is the same.

const discounter = discount => price => price * (1 - discount);

const tenPercentOff = discounter(0.1);
console.log(tenPercentOff(100)); // 90

// you can also call one function after the other by just
// adding the second set of parameters in the parentheses right after the first

discounter(0.1)(100);