describe("Plane", function () {
  beforeEach(function() {
    plane = new Plane()
    // airport = new Airport()
    airport = jasmine.createSpyObj('airport', ['prepareForLanding', 'prepareForTakeoff', 'hasSpace']);
  });

  it("can land at an airport", function() {
    // spyOn(airport, 'prepareForLanding')
    plane.land(airport)
    expect(airport.prepareForLanding).toHaveBeenCalled()
  });
});
