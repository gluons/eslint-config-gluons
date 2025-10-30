import { FlatESLint } from 'eslint/use-at-your-own-risk';
import type { Linter } from 'eslint';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

type FlatConfigInput = Linter.Config | Linter.Config[];

const moduleDir =
	typeof __dirname === 'string'
		? __dirname
		: dirname(fileURLToPath(import.meta.url));

const fixturesDir = resolve(moduleDir, '../fixtures');

const toFlatConfigArray = (config: FlatConfigInput): Linter.Config[] => {
	return Array.isArray(config) ? [...config] : [config];
};

export const lintFixture = async (
	configInput: FlatConfigInput,
	fixture: string
) => {
	const config = toFlatConfigArray(configInput);

	const eslint = new FlatESLint({
		overrideConfig: config,
		cwd: fixturesDir,
		ignore: false
	});

	return eslint.lintFiles([fixture]);
};

export const withTypeScriptProject = (
	configInput: FlatConfigInput,
	tsconfigFile: string
): Linter.Config[] => {
	const config = toFlatConfigArray(configInput);
	const tsconfigPath = resolve(fixturesDir, tsconfigFile);
	const tsconfigDir = dirname(tsconfigPath);

	return config.map(entry => {
		const parserOptions = entry.languageOptions?.parserOptions;

		if (!parserOptions || typeof parserOptions !== 'object') {
			return entry;
		}

		const typedParserOptions = parserOptions as Record<string, unknown> & {
			project?: string | string[];
			projectService?: unknown;
			tsconfigRootDir?: string;
		};

		const usesTypeInformation =
			typedParserOptions.projectService !== undefined ||
			typedParserOptions.project !== undefined;

		if (!usesTypeInformation) {
			return entry;
		}

		return {
			...entry,
			languageOptions: {
				...entry.languageOptions,
				parserOptions: {
					...typedParserOptions,
					project: typedParserOptions.project ?? [tsconfigPath],
					tsconfigRootDir:
						typedParserOptions.tsconfigRootDir ?? tsconfigDir
				}
			}
		};
	});
};
