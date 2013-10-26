describe("function stubbing", function() {
  describe("a global function", function() {

    describe("without applying the spy", function() {
      it("returns the result of original method", function() {
        expect(window.someMethod()).toEqual("hey hi ok bye");
      });
    });

    describe("applying the spy", function() {
      it("returns the result of the stubbed method", function() {
        spyOn(window, "someMethod").andReturn("stubbed value");
        expect(window.someMethod()).toEqual("stubbed value");
      });
    });

  });
});
