import 'font-awesome/css/font-awesome.css';
import 'buefy/lib/buefy.css';

import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';

Vue.use(Buefy, {
	defaultIconPack: 'fa'
});

new Vue({
	el: '#app',
	render: h => h(App)
});
