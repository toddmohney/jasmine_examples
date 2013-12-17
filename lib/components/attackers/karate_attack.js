com.gust.components = com.gust.components || {};
com.gust.components.attackers = com.gust.components.attackers || {};

com.gust.components.attackers.karateAttack = function(){};

$.extend(com.gust.components.attackers.karateAttack.prototype, {
  initialize: function() {},

  attack: function($target) {
    $target.prepend("KARATE ATTACK!!! ");
    $target.append(" KARATE ATTACK!!!");
  },
});

