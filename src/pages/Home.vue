<template lang="pug">
#home
	section.hero.is-primary
		.hero-body
			.container
				h1.title ESLint Config Gluons
				h2.subtitle.
					#[blank-link(url='https://github.com/gluons') gluons]' personal
					#[blank-link(url='https://eslint.org/') ESLint] shareable config.
	section.section
		.container
			h2.title Installation
			.content
				.box
					p: b Via #[blank-link(:url='npmUrl') npm]:
					p: blank-link(url='https://www.npmjs.com/package/eslint-config-gluons')
						img(src='https://nodei.co/npm/eslint-config-gluons.png?compact=true')
					highlight-code(lang='bash').
						npm install --save-dev eslint-config-gluons
				.box
					p: b Via #[blank-link(:url='yarnUrl') Yarn]:
					highlight-code(lang='bash').
						yarn add --dev eslint-config-gluons
			h3.title.is-4 Using with #[blank-link(:url='vueUrl') Vue]
			.content
				p Install #[blank-link(url='https://github.com/vuejs/eslint-plugin-vue') #[highlight-code(inline) eslint-plugin-vue]].
				.box
					p: b Via #[blank-link(:url='npmUrl') npm]:
					highlight-code(lang='bash').
						npm install --save-dev eslint-plugin-vue
				.box
					p: b Via #[blank-link(:url='yarnUrl') Yarn]:
					highlight-code(lang='bash').
						yarn add --dev eslint-plugin-vue
			h3.title.is-4 Using #[highlight-code(inline) babel-eslint] as parser
			.content
				p Install #[blank-link(url='https://github.com/babel/babel-eslint') #[highlight-code(inline) babel-eslint]].
				.box
					p: b Via #[blank-link(:url='npmUrl') npm]:
					highlight-code(lang='bash').
						npm install --save-dev babel-eslint
				.box
					p: b Via #[blank-link(:url='yarnUrl') Yarn]:
					highlight-code(lang='bash').
						yarn add --dev babel-eslint
	section.section
		.container
			h2.title Usage
			.content
				.box
					p: b Normal:
					highlight-code(lang='json').
						{
							"extends": "gluons"
						}
				.box
					p: b ECMAScript 2015+:
					highlight-code(lang='json').
						{
							"extends": "gluons/esnext"
						}
				.box
					p: b: blank-link(:url='vueUrl') Vue:
					highlight-code(lang='json').
						{
							"extends": "gluons/vue"
						}
</template>


<script>
export default {
	name: 'Home',
	data() {
		return {
			npmUrl: 'https://www.npmjs.com/',
			yarnUrl: 'https://yarnpkg.com/',
			vueUrl: 'https://vuejs.org/'
		};
	}
};
</script>

<style scoped>
pre {
	tab-size: 4;
	background-color: transparent;
	padding: 0;
}
</style>
