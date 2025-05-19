//  the index of an item, can remove it from the array using splice()

// In this call to splice(), the first argument says where to start removing items, and the second argument says how many items should be removed.

const citiesIndexout = ["Pune", "Mumbai", "Thane", "Khopoli"];
const index = citiesIndexout.indexOf("Thane");
if (index !== -1) {
	citiesIndexout.splice(index, 2);
}
console.log("Remaining Cities after use splice() :",citiesIndexout)

console.log(" ");



