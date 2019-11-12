describe("Plane", function () {
  beforeEach(function() {
    plane = new Plane()
    airport = jasmine.createSpyObj('airport',{'hasSpace' : true, hangar})
  })
  
  it("can land at an airport", function() {
    plane.land(airport)
    expect(airport.hasSpace).toHaveBeenCalled()
  })
})