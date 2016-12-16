const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	parserOptions: {
		ecmaVersion: 6
	},
	rules: {

		/*
		 * Important rules
		 */

		// indent: http://eslint.org/docs/rules/indent
		'indent': [
			'warn',
			'tab',
			{
				SwitchCase: 1
			}
		],
		// semi: http://eslint.org/docs/rules/semi
		'semi': [
			'error',
			'always'
		],
		// quotes: http://eslint.org/docs/rules/quotes
		'quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		// brace-style: http://eslint.org/docs/rules/brace-style
		'brace-style': [
			'error',
			'1tbs'
		],
		// curly: http://eslint.org/docs/rules/curly
		'curly': [
			'error',
			'all'
		],
		// yoda: http://eslint.org/docs/rules/yoda
		'yoda': [
			'error',
			'never'
		],
		// comma-style: http://eslint.org/docs/rules/comma-style
		'comma-style': [
			'error',
			'last'
		],
		// comma-spacing: http://eslint.org/docs/rules/comma-spacing
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		// comma-dangle: http://eslint.org/docs/rules/comma-dangle
		'comma-dangle': [
			'error',
			'never'
		],
		// dot-location: http://eslint.org/docs/rules/dot-location
		'dot-location': [
			'error',
			'property'
		],


		/*
		 * No
		 */

		// no-eval: http://eslint.org/docs/rules/no-eval
		'no-eval': 'error',
		// no-unused-vars: http://eslint.org/docs/rules/no-unused-vars
		'no-unused-vars': [
			'warn',
			{
				args: 'all'
			}
		],
		// no-console: http://eslint.org/docs/rules/no-console
		'no-console': isProd ? 'warn' : 'off',
		// no-debugger: http://eslint.org/docs/rules/no-debugger
		'no-debugger': isProd ? 'error' : 'off',
		// no-global-assign: http://eslint.org/docs/rules/no-global-assign
		'no-global-assign': 'warn',
		// no-new-wrappers: http://eslint.org/docs/rules/no-new-wrappers
		'no-new-wrappers': 'error',
		// no-array-constructor: http://eslint.org/docs/rules/no-array-constructor
		'no-array-constructor': 'error',
		// no-new-object: http://eslint.org/docs/rules/no-new-object
		'no-new-object': 'error',


		/*
		 * Misc.
		 */

		// keyword-spacing: http://eslint.org/docs/rules/keyword-spacing
		'keyword-spacing': 'error',
		// operator-assignment: http://eslint.org/docs/rules/operator-assignment
		'operator-assignment': [
			'warn',
			'always'
		],
		// space-before-function-paren: http://eslint.org/docs/rules/space-before-function-paren
		'space-before-function-paren': [
			'warn',
			'always'
		],
		// space-infix-ops: http://eslint.org/docs/rules/space-infix-ops
		'space-infix-ops': [
			'error',
			{
				int32Hint: false
			}
		],
		// func-name-matching: http://eslint.org/docs/rules/func-name-matching
		'func-name-matching': 'warn',
		// wrap-iife: http://eslint.org/docs/rules/wrap-iife
		'wrap-iife': [
			'warn',
			'inside'
		],


		/*
		 * ES6
		 */

		// no-var: http://eslint.org/docs/rules/no-var
		'no-var': 'warn',
		// arrow-body-style: http://eslint.org/docs/rules/arrow-body-style
		'arrow-body-style': [
			'warn',
			'as-needed',
			{
				requireReturnForObjectLiteral: true
			}
		],
		// arrow-parens: http://eslint.org/docs/rules/arrow-parens
		'arrow-parens': [
			'warn',
			'as-needed'
		],
		// arrow-spacing: http://eslint.org/docs/rules/arrow-spacing
		'arrow-spacing': 'error',
		// object-shorthand: http://eslint.org/docs/rules/object-shorthand
		'object-shorthand': [
			'warn',
			'always',
			{
				avoidQuotes: true
			}
		],
		// prefer-template: http://eslint.org/docs/rules/prefer-template
		'prefer-template': 'warn'
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	extends: 'eslint:recommended'
};
