import { antfu as eslintConfig } from "@antfu/eslint-config";

export default eslintConfig({
	"typescript": true,
	"vue": true,
	"unocss": true,
	"stylistic": {
		"indent": "tab",
		"quotes": "double"
	},
	"rules": {
		"curly": "off",
		"no-console": "off",
		"no-new-func": "off",
		"style/semi": ["error", "always"],
		"style/quote-props": ["warn", "always"],
		"style/comma-dangle": ["warn", "never"],
		"style/brace-style": ["warn", "1tbs"],
		"style/arrow-parens": ["error", "always"],
		"vue/block-order": ["error", { "order": ["template", "script", "style"] }],
		"antfu/top-level-function": "off"
	}
});
