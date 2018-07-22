<template lang="pug">
#vue-rule
	section.section: .container.has-text-centered
		h1.title Vue Rules
		h2.subtitle
			| Collection of
			|
			blank-link(:url='vueUrl') Vue
			|
			| rule for
			|
			blank-link(:url='eslintPluginVueUrl'): code eslint-plugin-vue.
	rule(
		v-for='rule in rules'
		:key='rule.name'
		:baseRuleUrl='baseVueRuleUrl'
		:name='rule.name'
		:realName='rule.realName | md'
		:value='rule.value'
		:options='rule.options'
	)
</template>

<script>
import transformRules from '@/utils/transformRules';
const vueRules = require('eslint-config-gluons/vue');

let transformedRules = transformRules(vueRules.rules, 'vue');

const BASE_VUE_RULE_URL = 'https://github.com/vuejs/eslint-plugin-vue/tree/master/docs/rules';

export default {
	name: 'Vue',
	filters: {
		md(value) {
			return `${value}.md`; // Append .md extension
		}
	},
	data() {
		return {
			vueUrl: 'https://vuejs.org/',
			eslintPluginVueUrl: 'https://github.com/vuejs/eslint-plugin-vue',
			baseVueRuleUrl: BASE_VUE_RULE_URL,
			rules: transformedRules
		};
	}
};
</script>
