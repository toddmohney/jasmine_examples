
function bangBang(arg) {
  return !!arg;
};


describe("the bang-bang operator", function() {
  describe("applied to null", function() {
    it("returns false", function() {
      expect(bangBang(null)).toEqual(false);
    });
  });

  describe("applied to undefined", function() {
    it("returns false", function() {
      expect(bangBang(undefined)).toEqual(false);
    });
  });

  describe("applied to a non-empty string", function() {
    it("returns true", function() {
      expect(bangBang("this is a string")).toEqual(true);
    });
  });

  describe("applied to an empty string", function() {
    it("returns false", function() {
      expect(bangBang("")).toEqual(false);
    });
  });

  describe("applied to an integer", function() {
    describe("a positive integer", function() {
      it("returns true", function() {
        expect(bangBang(100)).toEqual(true);
      });
    });

    describe("a negative integer", function() {
      it("returns true", function() {
        expect(bangBang(-999)).toEqual(true);
      });
    });

    describe("zero", function() {
      it("returns false", function() {
        expect(bangBang(0)).toEqual(false);
      });
    });
  });

  describe("applied to an array", function() {
    it("is always true", function() {
      expect(bangBang([])).toEqual(true);
      expect(bangBang([1,2,3])).toEqual(true);
    })
  });

  describe("applied to an object", function() {
    it("is always true", function() {
      expect(bangBang({})).toEqual(true);
      expect(bangBang({
        name: "Tom Tucker"
      })).toEqual(true);
    })
  });
});
