const { CLIEngine } = require('eslint');
const path = require('path');

const esNextConfig = require('../esnext');

const esNextFixturePath = path.resolve(__dirname, '../fixtures/esnext.js');

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
