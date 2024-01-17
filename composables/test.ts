export const useTest = () => {
	const test = ref("Text from composable");

	if (test.value !== "") {
		console.log(true);
	} else {
		console.log(false);
	}

	return {
		test
	};
};
