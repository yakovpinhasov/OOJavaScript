
// photo function
function Photo(name, location){
	this.name = name;
	this.location = location;
}

// album function
function album(){
	this.photos = [];
	this.addPhoto = function(Photo){
		this.photos.push(Photo);
	}
}

photo1 = new Photo("swimming.jpg", "Spain");
photo2 = new Photo("dancing.jpg", "Amsterdam");

// creating vacation album
vacation = new album();
// adding the photos to the album
vacation.addPhoto(photo1);
vacation.addPhoto(photo2);

console.log("first photo is "+ vacation.photos[0].name+ " and it was at " + vacation.photos[0].location );
console.log("second photo is "+ vacation.photos[1].name+ " and its location is " + vacation.photos[1].location );