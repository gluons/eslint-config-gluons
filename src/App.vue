<template lang="pug">
#app
	nav.navbar(role='navigation')
		.container
			.navbar-brand
				a.navbar-item.has-text-weight-bold.has-text-primary(
					href='./'
				) #[b-icon#brand-icon(icon='heart', size='is-medium')]ESLint Config Gluons
			.navbar-menu
				.navbar-start
					a.navbar-item(href='./') Home
	home
	footer.footer
		.container
			.content.has-text-centered
				p: blank-link(url='https://bulma.io')
					img(
						src='https://bulma.io/images/made-with-bulma--dark.png'
						width='128'
						height='24'
						alt='Made with Bulma'
					)
</template>

<script>
import Home from './pages/Home';

export default {
	name: 'App',
	components: {
		Home
	}
};
</script>

<style scoped>
#brand-icon {
	color: red;
	margin-right: .5em;
}
footer a {
	outline: none;
}
</style>
