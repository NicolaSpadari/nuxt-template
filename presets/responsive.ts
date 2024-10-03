import { definePreset } from "@unocss/core";
import { toEscapedSelector as e } from "unocss";

interface FontSizeConfig {
	[key: string]: [string, { lineHeight: string }]
}
interface BreakpointsConfig {
	[key: string]: string
}
interface PresetOptions {
	fontSizes: FontSizeConfig
	breakpoints: BreakpointsConfig
}

const remToPx = (rem: string) => Number.parseFloat(rem) * 16;
const sortKeys = (fontSizes: FontSizeConfig) => Object.keys(fontSizes).sort((a, b) =>
	remToPx(fontSizes[a][0]) - remToPx(fontSizes[b][0])
);

export const presetResponsiveFontSize = definePreset((options: PresetOptions) => {
	return {
		name: "unocss-preset-responsive-fontsize",
		rules: [
			[
				/^text-responsive-(xxs|xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
				([, size], { rawSelector }) => {
					const sortedKeys = sortKeys(options.fontSizes);
					const index = sortedKeys.indexOf(size);
					const prevSize = index > 0 ? sortedKeys[index - 1] : size;
					const [fontSize, { lineHeight }] = options.fontSizes[size];
					const [prevFontSize, { lineHeight: prevLineHeight }] = options.fontSizes[prevSize];
					const selector = e(rawSelector);

					return `
						${selector} {
							font-size: ${prevFontSize};
							line-height: ${prevLineHeight};
						}
	
						@media (min-width: ${options.breakpoints.lg}) {
							${selector} {
								font-size: ${fontSize};
								line-height: ${lineHeight};
							}
						}
					`;
				}
			]
		]
	};
});

export default presetResponsiveFontSize;
