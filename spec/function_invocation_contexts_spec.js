// Implemention examples
// Concept: The context of a function call is based on where it
//          was invoked rather than where it was declared

function whoAmI() { return this; }

function addEmUp() {
  var sum = 0;
  for(var i=0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  this.sum = sum;
}

function Kitten() {
  this.meow = function() { return this; }
}

var puppy1 = {
  bark: whoAmI
}

var puppy2 = {
  bark: whoAmI
}

// Test examples

describe("function invocation contexts", function() {
  describe("the context of a function invoked...", function() {

    describe("as a top-level function", function() {
      it("has an invocation context of 'window'", function() {
        expect(whoAmI()).toEqual(window);
      });
    });

    describe("as a method call", function() {
      it("has an invocation context of the object", function() {
        expect(puppy1.bark()).toEqual(puppy1);
      });
    });

    describe("as another method call", function() {
      it("has an invocation context of the object", function() {
        expect(puppy2.bark()).toEqual(puppy2);
      });
    });

    describe("as a constructor", function() {
      it("has an invocation context of the object", function() {
        var toonses = new Kitten();
        var meowser = new Kitten();

        expect(toonses.meow()).toEqual(toonses);
        expect(meowser.meow()).toEqual(meowser);
      });
    });

    describe("via call/apply", function() {
      describe("call", function() {
        it("has a context of the object argument", function() {
          var toonses = new Kitten();
          var meowser = new Kitten();

          expect(whoAmI.call(toonses)).toEqual(toonses);
          expect(whoAmI.call(meowser)).toEqual(meowser);
        });

        it("executes the function within the scope of the object instance", function() {
          var toonses = new Kitten();
          var meowser = new Kitten();

          addEmUp.call(toonses, 1,2,3,4,5);
          addEmUp.call(meowser, 5,6,7,8,9);

          expect(toonses.sum).toEqual(15);
          expect(meowser.sum).toEqual(35);
        })
      });

      describe("apply", function() {
        it("has a context of the object argument", function() {
          var toonses = new Kitten();
          var meowser = new Kitten();

          expect(whoAmI.apply(toonses)).toEqual(toonses);
          expect(whoAmI.apply(meowser)).toEqual(meowser);
        });

        it("executes the function within the scope of the object instance", function() {
          var toonses = new Kitten();
          var meowser = new Kitten();

          addEmUp.apply(toonses, [1,2,3,4,5]);
          addEmUp.apply(meowser, [5,6,7,8,9]);

          expect(toonses.sum).toEqual(15);
          expect(meowser.sum).toEqual(35);
        })
      });
    });

  });
});
