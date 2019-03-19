// anonymous function expression
var funcExp = function (txt) {
    console.log(txt);
};

// named function expression
var funcExp2 = function func(txt) {
    console.log(txt);
};

// Arguments can be accessed inside function even without specifying parameters

function logger() {
    //arguments object (an array-like structure) is available and
    //contains all the arguments passed to this function
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
logger(1, 2, 3, 4, 5, 6, 7, 8);

// the call() method calls a function with a given `this` value and arguments provided
// individually

function makeArray(arg1, arg2) {
    return [this, arg1, arg2];
};

var gasGuzzler = { year: 2015, model: 'Cevy Camaro' };

console.log(makeArray.call(gasGuzzler, 'one', 'two')); // [gasGuzzler, 'one', 'two']

// the fundamental difference between call() and apply() is that
// call accepts an argument list while apply() accepts a single array of arguments

// prototype inheritance
function Base() {
}

Base.prototype.display = function () {
    console.log('I am Base');
};

var obj = new Base();

obj.display(); // Able to access display() defined on the base

// its main purpose is to allow multiple instances of an object to share a common property







