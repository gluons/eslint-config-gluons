import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import RulesMain from './pages/RulesMain.vue';
import RulesStylistic from './pages/RulesStylistic.vue';
import RulesTs from './pages/RulesTs.vue';
import RulesVue from './pages/RulesVue.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/rules/main',
		name: 'rules-main',
		component: RulesMain
	},
	{
		path: '/rules/stylistic',
		name: 'rules-stylistic',
		component: RulesStylistic
	},
	{
		path: '/rules/typescript',
		name: 'rules-ts',
		component: RulesTs
	},
	{
		path: '/rules/vue',
		name: 'rules-vue',
		component: RulesVue
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
