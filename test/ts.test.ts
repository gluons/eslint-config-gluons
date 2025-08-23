import { ESLint } from 'eslint';
import { resolve } from 'path';
import tsConfig from '../ts';

const tsFixurePath = resolve(__dirname, '../fixtures/ts.ts');
const tsConfigPath = resolve(__dirname, '../fixtures/tsconfig.json');

// Update the config to use the correct path
const updatedConfig = [...tsConfig];
// Find the TypeScript config and update its parser options
const tsConfigIndex = updatedConfig.findIndex(
	config => config.languageOptions && config.languageOptions.parserOptions
);

if (tsConfigIndex !== -1) {
	updatedConfig[tsConfigIndex] = {
		...updatedConfig[tsConfigIndex],
		languageOptions: {
			...updatedConfig[tsConfigIndex].languageOptions,
			parserOptions: {
				...updatedConfig[tsConfigIndex].languageOptions?.parserOptions,
				project: tsConfigPath
			}
		}
	};
}

const cli = new ESLint({
	overrideConfigFile: true,
	overrideConfig: updatedConfig,
	ignore: false
});

test('TypeScript rules', async () => {
	const results = await cli.lintFiles([tsFixurePath]);

	// Print the errors for debugging
	if (results[0].messages.length > 0) {
		console.log('Errors found:');
		results[0].messages.forEach((message, index) => {
			console.log(
				`${index + 1}. ${message.ruleId || 'null'}: ${message.message} (${message.line}:${message.column})`
			);
		});
	}

	expect(results[0].errorCount).toBe(0);
	expect(results[0].warningCount).toBe(0);
});
