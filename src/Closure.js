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
