<template lang="pug">
#main-rule
	section.section: .container.has-text-centered
		h1.title Main Rules
		h2.subtitle Collection of main rule.
	rule(
		v-for='rule in rules'
		:key='rule.name'
		:name='rule.name'
		:value='rule.value'
		:options='rule.options'
	)
</template>

<script>
import transformRules from '@/utils/transformRules';
const mainRules = require('eslint-config-gluons');

let transformedRules = transformRules(mainRules.rules);

export default {
	name: 'Main',
	data() {
		return {
			rules: transformedRules
		};
	}
};
</script>
