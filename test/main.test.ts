import { ESLint } from 'eslint';
import { resolve } from 'path';
import mainConfig from '../';

const mainFixturePath = resolve(__dirname, '../fixtures/main.js');

const cli = new ESLint({
	overrideConfigFile: true,
	overrideConfig: mainConfig,
	ignore: false
});

test('Main rules', async () => {
	const results = await cli.lintFiles([mainFixturePath]);

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
