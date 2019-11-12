function Plane () {

}

Plane.prototype.land = function(airport) {
  airport.checkCapacity()
  airport.hangar.push(plane)
  return airport
}