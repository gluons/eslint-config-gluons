import type { Linter } from 'eslint';
import esnextConfig from './esnext.js';
import tsConfig from './ts.js';

const config: Linter.Config[] = [...esnextConfig, ...tsConfig];

export default config;
