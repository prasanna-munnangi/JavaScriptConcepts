
// Immediately invoked function expression.
// executes the function when its created and stores the correct values of i
var arr = [];

for (var i = 0; i< 3; i++) {
     arr[i] = (function(index) {
           return function() {
            console.log('this is ' + index);
          }
     })(i);
}


for (var j = 0; j < 3; j++) {
   arr[j](); // prints this is 1, this is 2, this is 3
}
