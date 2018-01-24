<template>
	<div id="app">
		<nav
			class="navbar"
			role="navigation"
		>
			<div class="container">
				<div class="navbar-brand">
					<a
						href="javascript:void(0);"
						class="navbar-item has-text-weight-bold has-text-primary"
					>
						❤️ ESLint Config Gluons
					</a>
				</div>
			</div>
		</nav>
		<Home/>
	</div>
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
