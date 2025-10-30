import type { Linter } from 'eslint';
import {
	lintFixture,
	withTypeScriptProject
} from './utils/flat-eslint';

let vueTSConfig: Linter.Config[];

beforeAll(async () => {
	const module = await import('../dist/vue-ts.js');

	vueTSConfig = module.default;
});

describe('Vue + TypeScript config', () => {
	test('passes valid Vue TypeScript fixture', async () => {
		const [result] = await lintFixture(
			withTypeScriptProject(vueTSConfig, 'tsconfig.json'),
			'app-ts.vue'
		);

		expect(result.errorCount).toBe(0);
		expect(result.warningCount).toBe(0);
	});

	test('reports rule violations for invalid Vue TypeScript fixture', async () => {
		const [result] = await lintFixture(
			withTypeScriptProject(vueTSConfig, 'tsconfig.json'),
			'app-ts-invalid.vue'
		);

		expect(result.errorCount).toBeGreaterThan(0);
		expect(result.messages.map(message => message.ruleId)).toContain(
			'@typescript-eslint/no-unused-vars'
		);
	});
});
