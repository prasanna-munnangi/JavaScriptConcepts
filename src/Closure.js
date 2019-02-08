// the abilility of inner function to access outer functions variables & parameters is known as closure.
// even after the execution of the function the inner function has access to the outer functions variables and parameters

var outerFunc = function(a, b) {
    var c = '!';
    var innerFunc = function() {
       console.log(a + b + c);
    };
    innerFunc();
}

outerFunc('Hello', 'World'); // prints Hello World !



// in closure the innerFunction has access to
// outer functions parameter even after the execution of the outerFunction is finished
var outerFunction = function (multiplier) {
  var innerFunction = function(operand) {
    return multiplier*operand;
  }
  return innerFunction;
}

var operation = outerFunction(10);
console.log(operation(10)); // prints 100
