function PostiveNegativenumber(number) {
	let output;
	if (number > 0) {
		output = `Positive`;
	}
	else {
		output = `Negative`;
	}

	return output;
}

console.log(`Number is :`, PostiveNegativenumber(-4));