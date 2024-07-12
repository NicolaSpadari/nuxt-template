export const useTest = () => {
	const test = useState("text", () => "Text from composable");

	const setValue = async () => {
		const data = await $fetch<MyInterface>("/api/test");

		test.value = data.text;
	};

	return {
		test,
		setValue
	};
};
