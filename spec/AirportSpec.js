describe("Airport", function () {
  beforeEach(function() {
    plane = new Plane();
    // plane = jasmine.createSpyObj('plane', ['land', 'takeoff']);
    airport = new Airport();
  });

  it("contains a plane when a plane lands", function () {
    plane.land(airport)
    expect(airport.hangar).toContain(plane)
  });

  it("can take off from an airport", function() {
    plane.land(airport)
    airport.prepareForTakeoff(plane)
    expect(airport.hangar).not.toContain(plane)
  });

  it("doesnt allow planes to land when over capacity", function() {
    for(i = 0; i < 10; i++) {
      plane.land(airport)
    }
    expect(function(){plane.land(airport)}).toThrow("Cannot land!");
  });
})
