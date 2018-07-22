<template lang="pug">
section.rule.section: .container
	h1.title: blank-link(:url='ruleUrl') {{ name }}
	.content
		p
			strong Value:
			code {{ value }}
		template(v-if='options !== null'): p
			strong Options:
			template
				code(v-if='isString(options)') {{ options }}
				ul(v-else-if='isArray(options)')
					li(v-for='(option, index) in options', :key='`option${index}`')
						span.code(v-if='isObject(option)'): highlight-code(lang='js') {{ option | stringify }}
						code(v-else) {{ option }}
				highlight-code(v-else-if='isObject(options)', lang='js')
					| {{ options | stringify }}
		p: slot
</template>

<script>
const BASE_ESLINT_RULE_URL = 'https://eslint.org/docs/rules';

export default {
	name: 'Rule',
	filters: {
		stringify(value) {
			return JSON.stringify(value, null, '\t');
		}
	},
	props: {
		baseRuleUrl: {
			type: String,
			default: BASE_ESLINT_RULE_URL
		},
		name: {
			type: String,
			required: true
		},
		realName: { // Use for rule's URL
			type: String,
			required: true
		},
		value: {
			type: String,
			default: 'error'
		},
		options: {
			type: [String, Array, Object],
			default: null
		}
	},
	computed: {
		ruleUrl() {
			return `${this.baseRuleUrl}/${this.realName}`;
		}
	},
	methods: {
		isString(value) {
			return typeof value === 'string';
		},
		isArray(value) {
			return Array.isArray(value);
		},
		isObject(value) {
			return (value !== null) && (typeof value === 'object');
		}
	}
};
</script>

<style lang="scss" scoped>
section.rule {
	padding: {
		top: 1.5rem;
		bottom: 1.5rem;
	}
	.content {
		strong {
			margin-right: 5px;
		}
		p pre {
			margin-top: 1em;
		}
		ul pre {
			margin-top: initial;
		}
	}
	ul li span.code {
		position: relative;
		top: -1em;
	}
}
</style>
