import type { Linter } from 'eslint';
import { lintFixture, withTypeScriptProject } from './utils/flat-eslint';

let tsConfig: Linter.Config[];

beforeAll(async () => {
	const module = await import('../dist/ts.js');

	tsConfig = module.default;
});

describe('TypeScript config', () => {
	test('passes valid TypeScript fixture', async () => {
		const [result] = await lintFixture(
			withTypeScriptProject(tsConfig, 'tsconfig.json'),
			'ts.ts'
		);

		expect(result.errorCount).toBe(0);
		expect(result.warningCount).toBe(0);
	});

	test('reports rule violations for invalid TypeScript fixture', async () => {
		const [result] = await lintFixture(
			withTypeScriptProject(tsConfig, 'tsconfig.json'),
			'ts-invalid.ts'
		);

		expect(result.errorCount).toBeGreaterThan(0);
		expect(result.messages.map(message => message.ruleId)).toContain(
			'@typescript-eslint/no-floating-promises'
		);
	});
});
