//---- To add one or more items to the end of an array we can use push().

const citiesEnd = ["Pune", "Mumbai"];
citiesEnd.push("Thane");
console.log("1 city add using push() in last :",citiesEnd); // [ 'Pune', 'Mumbai', 'Thane' ]

citiesEnd.push("Pimpri", "Chinchwad");
console.log("Multi-cities add using push() in last :",citiesEnd); // [ 'Pune', 'Mumbai', 'Thane', 'Pimpri', 'Chinchwad' ]

console.log(" ");


// New length of the array is returned ==> newLength

const newLength = citiesEnd.push("Nashik");
console.log("New cities add using push() in last is :",citiesEnd); // ['Pune', 'Mumbai', 'Thane' 'Pimpri', 'Chinchwad', 'Nashik']
console.log("New length of citiesEnd array is :",newLength); // 6

console.log(" ");


//---- To add an item to the start of the array, use unshift()

const citiesStart = ["Chikhali", "Dehu"];
citiesStart.unshift("Alandi");
console.log("New city add using unshift() in start is :",citiesStart); // [ 'Alandi', 'Chikhali', 'Dehu' ]

const newLength2 = citiesStart.unshift();

console.log("New length of citiesStart array is :",newLength2); // 3

