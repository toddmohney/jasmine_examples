com.gust.components = com.gust.components || {};
com.gust.components.trap = function(){};

$.extend(com.gust.components.trap.prototype, {
  initialize: function($target, attacker) {
    this.$target = $target;
    this.attacker = attacker;
  },

  springTrap: function() {
    this.attacker.attack(this.$target);
  }
});
