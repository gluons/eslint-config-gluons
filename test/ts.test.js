const { CLIEngine } = require('eslint');
const { resolve } = require('path');

const tsConfig = require('../ts');
const tsFixurePath = resolve(__dirname, '../fixtures/ts.ts');

tsConfig.parserOptions.project = resolve(__dirname, '../tsconfig.json');

const cli = new CLIEngine({
	baseConfig: tsConfig,
	useEslintrc: false,
	ignore: false
});
const report = cli.executeOnFiles([tsFixurePath]);

test('TypeScript rules', () => {
	expect(report.errorCount).toBe(0);
	expect(report.warningCount).toBe(0);
});
