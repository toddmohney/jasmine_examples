(function($, ns, components){
  ns('karate-trap', function() {
    var karateAttacker = new components.attackers.karateAttack();
    var karateTrap = new components.trap($(this), karateAttacker);
    karateTrap.setAttacker(karateAttacker);

    return karateTrap;
  });
})($, com.gust.initializers, com.gust.components);

