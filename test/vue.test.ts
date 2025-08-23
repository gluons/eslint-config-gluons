import { ESLint } from 'eslint';
import { resolve } from 'path';
import vueConfig from '../vue';

const vueFixturePath = resolve(__dirname, '../fixtures/app.vue');

const cli = new ESLint({
	overrideConfigFile: true,
	overrideConfig: vueConfig,
	ignore: false
});

test('Vue rules', async () => {
	const results = await cli.lintFiles([vueFixturePath]);

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
