// Problem Statement:
// Simulate a traffic light system. Write a function that takes a color as input ('red', 'yellow', 'green') and returns the corresponding action:

// 'red': 'Stop'
// 'yellow': 'Caution'
// 'green': 'Go'

function TrafficLightAction(color) {
	switch (color.toLowerCase()) {
		case `red`:
			return `Stop`;		
		
		case `yellow`:
			return `Caution`;
		
		case `green`:
			return `Go`;

		default:
			return `Invalid Color`;
	}
}

console.log(TrafficLightAction(`Blue`));