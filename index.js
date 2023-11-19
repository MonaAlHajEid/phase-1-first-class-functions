// index.js

// Function 1: receivesAFunction
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // Function 2: returnsANamedFunction
  function returnsANamedFunction() {
    // Return a named function
    return function namedFunction() {
      console.log("This is a named function");
    };
  }
  
  // Function 3: returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log("This is an anonymous function");
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };
  