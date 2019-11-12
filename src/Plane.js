function Plane () {

}

Plane.prototype.land = function(airport) {
  if (airport.hasSpace()) {
    airport.hangar.push(plane)
    return airport
  } else {
    return "Cannot land!"
  }
}

Plane.prototype.take_off = function(airport) {
  index = airport.hangar.indexOf(this)
  airport.hangar.splice(index, 1)
}