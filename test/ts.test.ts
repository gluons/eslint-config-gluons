import { ESLint } from 'eslint';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('TypeScript ESLint Config', () => {
	let eslint: ESLint;

	beforeAll(async () => {
		const { default: config } = await import('../src/ts.js');
		eslint = new ESLint({
			overrideConfigFile: true,
			baseConfig: config
		});
	});

	describe('TypeScript files', () => {
		it('should validate valid TypeScript file', async () => {
			const filePath = resolve(__dirname, 'fixtures/valid-ts.ts');
			const results = await eslint.lintFiles([filePath]);

			expect(results).toHaveLength(1);
			expect(results[0].errorCount).toBe(0);
		});

		it('should detect errors in invalid TypeScript file', async () => {
			const filePath = resolve(__dirname, 'fixtures/invalid-ts.ts');
			const results = await eslint.lintFiles([filePath]);

			expect(results).toHaveLength(1);
			expect(results[0].errorCount).toBeGreaterThan(0);
		});
	});

	describe('JavaScript files with TypeScript config', () => {
		it('should lint JavaScript files', async () => {
			const filePath = resolve(__dirname, 'fixtures/valid-js.js');
			const results = await eslint.lintFiles([filePath]);

			expect(results).toHaveLength(1);
			// Config should run successfully (may have warnings from type-aware rules)
			expect(results[0]).toBeDefined();
		});
	});

	describe('Config structure', () => {
		it('should export a valid ESLint config array', async () => {
			const { default: config } = await import('../src/ts.js');
			expect(config).toBeDefined();
			expect(Array.isArray(config)).toBe(true);
			expect(config.length).toBeGreaterThan(0);
		});
	});
});
