<template lang="pug">
#esnext-rule
	section.section: .container.has-text-centered
		h1.title ESNext Rules
		h2.subtitle Collection of ECMAScript 2015+ rule.
	rule(
		v-for='rule in rules'
		:key='rule.name'
		:name='rule.name'
		:realName='rule.realName'
		:value='rule.value'
		:options='rule.options'
	)
</template>

<script>
import transformRules from '@/utils/transformRules';
const esNextRules = require('eslint-config-gluons/esnext');

let transformedRules = transformRules(esNextRules.rules);

export default {
	name: 'ESNext',
	data() {
		return {
			rules: transformedRules
		};
	}
};
</script>
