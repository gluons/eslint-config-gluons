import { ESLint } from 'eslint';
import { resolve } from 'path';
import mainConfig from '../';

const mainFixturePath = resolve(__dirname, '../fixtures/main.js');

const cli = new ESLint({
	baseConfig: mainConfig,
	useEslintrc: false,
	ignore: false
});

test('Main rules', async () => {
	const results = await cli.lintFiles([mainFixturePath]);

	expect(results[0].errorCount).toBe(0);
	expect(results[0].warningCount).toBe(0);
});
