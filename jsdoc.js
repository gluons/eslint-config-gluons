'use strict';

/*
 * JSDoc
 */
module.exports = {
	rules: {
		'require-jsdoc': [
			'error',
			{
				require: {
					FunctionDeclaration: true,
					MethodDefinition: true,
					ClassDeclaration: true,
					ArrowFunctionExpression: false
				}
			}
		],
		'valid-jsdoc': [
			'error',
			{
				requireReturn: false
			}
		]
	}
};
