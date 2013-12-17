describe("karate-attack", function() {
  var karateAttack, $thing;

  beforeEach(function() {
    $thing = $('<div>stuff</div>');
    karateAttack = new com.gust.components.attackers.karateAttack;
  });

  describe("attack", function() {
    it("surrounds the target in karate attacks", function() {
      karateAttack.attack($thing);
      expect($thing.html()).toEqual("KARATE ATTACK!!! stuff KARATE ATTACK!!!");
    });
  });
});
