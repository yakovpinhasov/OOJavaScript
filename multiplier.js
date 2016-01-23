// to run the programe run multiply() function from console mode
// multiplyer getting the last value
function Multiplier() {
  var lastValue = 1;
  this.getCurrentValue = function() {
    return lastValue;
  };
  // multiplies the entered number with lastValue
  this.multiply = function() {
    var a = prompt("Input your desired number");
    var b = a * this.getCurrentValue();// multiplyes the entered number to the last saved current number
    lastValue = b;
    console.log(b);
  }
}