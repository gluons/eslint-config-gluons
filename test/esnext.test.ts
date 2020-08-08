import { CLIEngine } from 'eslint';
import { resolve } from 'path';
import esNextConfig from '../lib/esnext';

const esNextFixturePath = resolve(__dirname, '../fixtures/esnext.js');

const cli = new CLIEngine({
	baseConfig: esNextConfig,
	useEslintrc: false,
	ignore: false
});

const report = cli.executeOnFiles([esNextFixturePath]);

test('ESNext rules', () => {
	expect(report.errorCount).toBe(0);
	expect(report.warningCount).toBe(0);
});
