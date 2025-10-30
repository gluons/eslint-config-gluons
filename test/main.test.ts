import type { Linter } from 'eslint';
import { lintFixture } from './utils/flat-eslint';

let mainConfig: Linter.Config[];

beforeAll(async () => {
	const module = await import('../dist/main');

	mainConfig = module.default;
});

describe('Main config', () => {
	test('passes valid JavaScript fixture', async () => {
		const [result] = await lintFixture(mainConfig, 'main.js');

		expect(result.errorCount).toBe(0);
		expect(result.warningCount).toBe(0);
	});

	test('reports rule violations for invalid JavaScript fixture', async () => {
		const [result] = await lintFixture(mainConfig, 'main-invalid.js');

		expect(result.errorCount).toBeGreaterThan(0);
		expect(result.messages.map(message => message.ruleId)).toContain('no-var');
	});
});
