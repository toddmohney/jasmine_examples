describe("shark-attack", function() {
  var sharkAttack, $thing;

  beforeEach(function() {
    $thing = $('<div>stuff</div>');
    sharkAttack = new com.gust.components.attackers.sharkAttack;
  });

  describe("attack", function() {
    it("surrounds the target in shark attacks", function() {
      sharkAttack.attack($thing);
      expect($thing.html()).toEqual("SHARK ATTACK!!! stuff SHARK ATTACK!!!");
    });
  });
});
