export const useElements = () => {
	const menuOpen = useState("menuOpen", () => false);

	return {
		menuOpen
	};
};
