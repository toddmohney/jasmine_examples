com.gust.components = com.gust.components || {};
com.gust.components.basicComponent = function(){};

$.extend(com.gust.components.basicComponent.prototype, {
  initialize: function($thing) {
    this.$element = $thing;
    this.addEventBindings();
  },

  hasBeenClicked: function() {
    return this.$element.hasClass('clicked');
  },

  markAsClicked: function(evt) {
    this.$element.addClass('clicked');
  },

  addEventBindings: function() {
    this.$element.click(_.bind(this.markAsClicked, this));
  }
});

