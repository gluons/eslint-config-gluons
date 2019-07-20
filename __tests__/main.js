const { CLIEngine } = require('eslint');
const path = require('path');

const mainConfig = require('../index');

const mainFixturePath = path.resolve(__dirname, '../fixtures/main.js');

const cli = new CLIEngine({
	baseConfig: mainConfig,
	useEslintrc: false,
	ignore: false
});

const report = cli.executeOnFiles([mainFixturePath]);

test('Main rules', () => {
	expect(report.errorCount).toBe(0);
	expect(report.warningCount).toBe(0);
});
