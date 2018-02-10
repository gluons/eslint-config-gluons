import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import RuleMain from './pages/rules/Main.vue';
import RuleESNext from './pages/rules/ESNext.vue';
import RuleVue from './pages/rules/Vue.vue';

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/rules/main',
		component: RuleMain
	},
	{
		path: '/rules/esnext',
		component: RuleESNext
	},
	{
		path: '/rules/vue',
		component: RuleVue
	}
];

const router = new VueRouter({
	routes
});

export default router;
