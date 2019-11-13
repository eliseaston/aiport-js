describe("Airport", function () {
  beforeEach(function() {
    plane = jasmine.createSpy('plane');
    airport = new Airport();
  });

  it("contains a plane when a plane lands", function () {
    airport.prepareForLanding(plane)
    expect(airport.hangar).toContain(plane)
  });

  it("can take off from an airport", function() {
    airport.prepareForLanding(plane)
    airport.prepareForTakeoff(plane)
    expect(airport.hangar).not.toContain(plane)
  });

  it("doesnt allow planes to land when over capacity", function() {
    for(i = 0; i < 10; i++) {
    airport.prepareForLanding(plane)
    }
    expect(function(){airport.prepareForLanding(plane)}).toThrow("Cannot land!");
  });
})
