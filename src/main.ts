import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import mainRules from './rules/main';

const config = defineConfig([
	mainRules,
	eslintPluginPrettierRecommended
]);

export default config;
