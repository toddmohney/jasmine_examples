(function($, ns, components){
  ns('shark-trap', function() {
    var sharkAttacker = new components.attackers.sharkAttack();
    var sharkTrap = new components.trap($(this), sharkAttacker);
    sharkTrap.setAttacker(sharkAttacker);

    return sharkTrap;
  });
})($, com.gust.initializers, com.gust.components);

