import {
	defineConfig,
	presetAttributify,
	presetTypography,
	presetWind4,
	transformerDirectives,
	transformerVariantGroup
} from "unocss";

export default defineConfig({
	shortcuts: [
		["crate", "mx-auto max-w-7xl px-4 lg:px-8 sm:px-6"],
		["flex-center", "flex justify-center items-center"],
		["absolute-center-h", "left-50% transform -translate-x-50%"],
		["absolute-center-v", "top-50% transform -translate-y-50%"]
	],
	presets: [
		presetWind4(),
		presetAttributify(),
		presetTypography()
	],
	theme: {
		fontFamily: {
			heading: "Montserrat",
			default: "Inter"
		}
	},
	transformers: [
		transformerDirectives(),
		transformerVariantGroup()
	]
});
