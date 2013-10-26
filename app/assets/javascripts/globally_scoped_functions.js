// Define a named global function
function helloThere() { }

// Define an unnamed global function
// Assigning a function to a variable
// allows the function to be invoked, however
// the name propery of the variable will be empty
var okThen = function() { }

// Define an anonymous global function
// Functionally equivalent to the unnamed global
// function 'okThen'
window.byeNow = function() { }

// Define a global function
function outer() {
  // define a locally scoped function
  function inner() { return "hey buddy"; }

  return inner();
}
