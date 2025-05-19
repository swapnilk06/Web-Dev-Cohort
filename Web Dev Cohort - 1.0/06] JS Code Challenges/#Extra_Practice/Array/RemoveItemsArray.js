//---- To remove the last item from the array, use pop()

const citiesLastout = ["Pune", "Mumbai", "Thane"];
citiesLastout.pop();
console.log("Remove last item using pop() in last is :",citiesLastout); // [ 'Pune', 'Mumbai' ]

console.log(" ");

// The pop() method returns the item that was removed. To save that item in a new variable
const Totalcities = ["Nagar", "PCMC", "Chakan"]
console.log("Total cities before pop() used :",Totalcities);
const removedLastcity = Totalcities.pop();
console.log("Last City remove using pop() removed city is :",removedLastcity); // Chakan
console.log("Total cities after pop() used :", Totalcities);

console.log(" ");


//---- To remove the first item from an array, use shift()

const cityFirstout = ["Pune", "Sangali", "Satara"];
console.log("Before remove first item using shift() is :",cityFirstout);
const removedFirstCity = cityFirstout.shift();
console.log("First City remove using shift() & display removed city is :",removedFirstCity);
