function Airport() {
  this.hangar = []
  this.capacity = 10;
}

Airport.prototype.takeOff = function(plane) {
  index = this.hangar.indexOf(plane)
  this.hangar.splice(index, 1)
}

Airport.prototype.checkCapacity = function() {
  if (this.hangar.length >= this.capacity) {
    throw new Error("Airport at capacity!")
  }
}
