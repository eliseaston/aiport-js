function Airport() {
  this.hangar = []
  this.capacity = 10;
}

Airport.prototype.prepareForLanding = function(plane) {
  if(this.hasSpace() === true) {
    this.hangar.push(plane);
  } else {
    throw "Cannot land!";
  }
};

Airport.prototype.prepareForTakeoff = function(plane) {
  index = this.hangar.indexOf(plane)
  this.hangar.splice(index, 1)
};

Airport.prototype.hasSpace = function() {
  if (this.hangar.length >= this.capacity) {
    return false
  } else {
    return true
  }
};
