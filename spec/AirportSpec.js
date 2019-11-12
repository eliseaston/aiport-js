describe("Airport", function () {
  beforeEach(function() {
    plane = new Plane()
    airport = new Airport()
  })

  it("doesnt allow planes to land when over capacity", function() {
    for(i = 0; i < 10; i++) {
      plane.land(airport)
    }
    expect( function () { plane.land(airport) }).toThrow(new Error("Airport at capacity!"))
  })

  it("can take off from an airport", function() {
    plane.land(airport)
    airport.takeOff(plane)
    expect(airport.hangar).not.toContain(plane)
    })

  it("contains a plane when a plane lands", function () {
    plane.land(airport)
    expect(airport.hangar).toContain(plane)
  })
})