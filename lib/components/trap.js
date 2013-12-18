com.gust.components = com.gust.components || {};
com.gust.components.trap = function(){};

$.extend(com.gust.components.trap.prototype, {
  initialize: function($target) {
    this.$target = $target;
    this.$target.click(_.bind(this.springTrap, this));
  },

  setAttacker: function(attacker) {
    this.attacker = attacker;
  },

  springTrap: function() {
    this.attacker.attack(this.$target);
  }
});
