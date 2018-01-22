import 'normalize.css';
import 'milligram';

import Vue from 'vue';
import Home from './Home.vue';

new Vue({
	el: '#app',
	render: h => h(Home)
});
