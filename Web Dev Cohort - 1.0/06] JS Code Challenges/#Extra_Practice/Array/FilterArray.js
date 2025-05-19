// Sometimes want to create a new array containing only the items in the original array that match some test --> using filter(). 
// Array of strings and returns an array containing just the strings that are greater than 8 characters long in below -

function isLong(city) {
	return city.length > 8;
  }

const cities = ["Pune", "Dehu", "CCHCCHCCH", "PCMCPCMCP"];
const longer = cities.filter(isLong);
console.log(longer); 
