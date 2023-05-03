export const useTest = () => {
    const test = ref("Text from composable");

    return {
        test
    };
};
