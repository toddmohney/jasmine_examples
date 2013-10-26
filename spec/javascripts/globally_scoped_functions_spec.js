
// Example implementation

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


// Jasmine Tests
describe("global functions", function(){
  describe("named functions", function() {
    it("defines 'helloThere", function() {
      expect(typeof(window.helloThere)).toEqual('function');
    });

    it("defines helloThere as a named function", function() {
      expect(window.helloThere.name).toEqual('helloThere');
    });
  });

  describe("unnamed functions", function() {
    it("defines 'okThen", function() {
      expect(typeof(window.okThen)).toEqual('function');
    });

    it("defines okThen as an unnamed function", function() {
      expect(window.okThen.name).toEqual('');
    });
  });

  describe("anonymous functions", function() {
    it("defines 'byeNow", function() {
      expect(typeof(window.byeNow)).toEqual('function');
    });

    it("defines byeNow as an unnamed function", function() {
      expect(window.byeNow.name).toEqual('');
    });
  });

  describe("scoped functions", function() {
    describe("outer", function() { 
      it("defines 'outer'", function() {
        expect(typeof(outer)).toEqual('function');
      });

      it("does not expose 'inner' to the global scope", function() {
        expect(window.inner).toEqual(undefined);
      });

      it("returns the result of calling 'inner'", function() {
        expect(window.outer()).toEqual("hey buddy");
      });
    });
  });
});
