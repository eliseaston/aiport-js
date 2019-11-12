describe("Plane", function () {
  beforeEach(function() {
    plane = new Plane()
    airport = new Airport()
  })
  
  it("can land at an airport", function() {
    expect(plane.land(airport)).toEqual(airport)
  })


})