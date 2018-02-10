<template lang="pug">
#home
	section.hero.is-primary.has-text-centered
		.hero-body
			.container
				h1.title ESLint Config Gluons
				h2.subtitle.
					#[blank-link.has-text-warning(url='https://github.com/gluons') gluons]' personal
					#[blank-link.has-text-warning(url='https://eslint.org/') ESLint] shareable config.
				p
					blank-link.button.is-medium(url='https://github.com/gluons/eslint-config-gluons')
						span.icon.is-medium: i.fa.fa-github.fa-lg
						span View on GitHub
	section.section
		.container
			h2.title #[b-icon.installation(icon='cog')] Installation
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
			h2.title #[b-icon.usage(icon='book')] Usage
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
			h3.title.is-4 Using #[highlight-code(inline) babel-eslint] as parser
			.content
				.box
					p: b Normal:
					highlight-code(lang='json').
						{
							"extends": "gluons/babel"
						}
				.box
					p: b ECMAScript 2015+:
					highlight-code(lang='json').
						{
							"extends": "gluons/esnext-babel"
						}
				.box
					p: b: blank-link(:url='vueUrl') Vue:
					highlight-code(lang='json').
						{
							"extends": "gluons/vue-babel"
						}
	section.section
		.container
			h2.title #[b-icon.badge(icon='certificate')] Badge
			.content
				p
					blank-link(url='https://github.com/gluons/eslint-config-gluons')
						img(
							src='https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square'
							alt='ESLint Gluons'
						)
				highlight-code.wrap(lang='markdown').
					[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)
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

<style lang="scss" scoped>
@import '~open-color/open-color.scss';

section {
	.icon {
		margin-right: .5rem;

		&.installation {
			color: $oc-gray-6;
		}
		&.usage {
			color: $oc-blue-6;
		}
		&.badge {
			color: $oc-yellow-6;
		}
	}
}
</style>
