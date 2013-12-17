describe("basic-component", function() {
  var basicComponent, $thing;

  beforeEach(function() {
    $thing = $('<div>');
    basicComponent = new com.gust.components.basicComponent;
    basicComponent.initialize($thing);
  });

  describe("hasBeenClicked", function() {
    describe("before clicking", function() {
      it("returns false", function() {
        expect(basicComponent.hasBeenClicked()).toEqual(false);
      });
    });

    describe("after clicking", function() {
      it("returns false", function() {
        var clickEvent = $.Event('click');
        $thing.trigger(clickEvent);
        expect(basicComponent.hasBeenClicked()).toEqual(true);
      });
    });
  });
});
