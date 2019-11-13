describe("Plane", function () {
  beforeEach(function() {
    plane = new Plane()
    airport = jasmine.createSpyObj('airport', ['prepareForLanding', 'prepareForTakeoff', 'hasSpace']);
  });

  it("can land at an airport", function() {
    plane.land(airport)
    expect(airport.prepareForLanding).toHaveBeenCalled()
  });
});
