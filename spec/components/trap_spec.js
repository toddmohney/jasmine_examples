describe("trap", function() {
  var trap, $target, attacker;

  beforeEach(function() {
    $target = $("<div>");

    attacker = jasmine.createSpyObj('attacker', ['attack']);

    trap = new com.gust.components.trap;
    trap.initialize($target, attacker);
  });

  describe("springTrap", function() {
    it("calls attack on the attacker", function() {
      trap.springTrap();
      expect(attacker.attack).toHaveBeenCalledWith($target);
    });
  });
});
