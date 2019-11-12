function testErr () {
  throw new Error("Airport at capacity!")
}

if (testErr() == true) {
  console.log("True")
} else {
  console.log("False")
}