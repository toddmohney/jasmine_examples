describe("global functions", function(){
  describe("named functions", function() {
    it("defines 'helloThere", function() {
      expect(typeof(helloThere)).toEqual('function');
    });

    it("defines helloThere as a named function", function() {
      expect(helloThere.name).toEqual('helloThere');
    });
  });

  describe("unnamed functions", function() {
    it("defines 'okThen", function() {
      expect(typeof(okThen)).toEqual('function');
    });

    it("defines okThen as an unnamed function", function() {
      expect(okThen.name).toEqual('');
    });
  });

  describe("anonymous functions", function() {
    it("defines 'byeNow", function() {
      expect(typeof(byeNow)).toEqual('function');
    });

    it("defines byeNow as an unnamed function", function() {
      expect(byeNow.name).toEqual('');
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
