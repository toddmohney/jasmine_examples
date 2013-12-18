com.gust.components = com.gust.components || {};
com.gust.components.attackers = com.gust.components.attackers || {};

com.gust.components.attackers.sharkAttack = function(){};

$.extend(com.gust.components.attackers.sharkAttack.prototype, {
  initialize: function() {},

  attack: function($target) {
    $target.prepend("SHARK ATTACK!!!<br/>");
    $target.append("<br/>SHARK ATTACK!!!");
  },
});


