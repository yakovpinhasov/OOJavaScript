// object with properties
var obj = {a:1, b:2, c:3}; 
 
 // This method will print all properties of the object created above   
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}
