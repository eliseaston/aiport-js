function Plane () {

}

Plane.prototype.land = function(airport) {
  airport.prepareForLanding(this);
};

Plane.prototype.takeoff = function(airport) {
  airport.prepareForTakeoff(this);
};
