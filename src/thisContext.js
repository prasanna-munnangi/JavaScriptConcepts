
/* This is tightly coupled to what context you are in, in your program.*/
// Context only makes sense inside of functions, and it points to the object 
// who is the owner of the function

var Bob = {
    title: 'Bob',
    greet: function (val) {
        console.log('Hi this is ' + this.title);
    }
};

var Alice = {
    title: 'Alice',
};

Bob.greet(); // console output `Hi this is Bob`
Bob.greet.apply(Alice); // console output `Hi this is Alice`