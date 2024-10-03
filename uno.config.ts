import {
	defineConfig,
	presetAttributify,
	presetTagify,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from "unocss";

import { presetResponsiveFontSize } from "./presets/responsive";

const customBreakpoints = {
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px",
	uw: "2000px"
};

const customFontSizes = {
	xxs: ["0.625rem", { lineHeight: "1rem" }],
	xs: ["0.75rem", { lineHeight: "1rem" }],
	sm: ["0.875rem", { lineHeight: "1.25rem" }],
	base: ["1rem", { lineHeight: "1.5rem" }],
	lg: ["1.125rem", { lineHeight: "1.75rem" }],
	xl: ["1.25rem", { lineHeight: "1.75rem" }],
	"2xl": ["1.5rem", { lineHeight: "2rem" }],
	"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
	"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
	"5xl": ["3rem", { lineHeight: "1" }],
	"6xl": ["3.75rem", { lineHeight: "1" }],
	"7xl": ["4.5rem", { lineHeight: "1" }],
	"8xl": ["6rem", { lineHeight: "1" }],
	"9xl": ["8rem", { lineHeight: "1" }]
};

export default defineConfig({
	shortcuts: [
		["crate", "mx-auto max-w-7xl px-4 lg:px-8 sm:px-6"],
		["flex-center", "flex justify-center items-center"],
		["absolute-center-h", "left-50% transform -translate-x-50%"],
		["absolute-center-v", "top-50% transform -translate-y-50%"]
	],
	rules: [
		[/^variation-weight-(\d+)$/, ([, w]) => ({ "font-variation-settings": `'wght' ${w}` })]
	],
	presets: [
		presetUno(),
		presetTagify(),
		presetAttributify(),
		presetTypography(),
		presetResponsiveFontSize({
			breakpoints: customBreakpoints,
			fontSizes: customFontSizes
		})
	],
	theme: {
		breakpoints: customBreakpoints,
		fontSize: customFontSizes,
		fontFamily: {
			heading: "Montserrat",
			text: "Inter"
		}
	},
	transformers: [
		transformerDirectives(),
		transformerVariantGroup()
	]
});
