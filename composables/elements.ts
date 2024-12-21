export const useUIElements = () => {
	const menuOpen = useState("menuOpen", () => false);

	return {
		menuOpen
	};
};
