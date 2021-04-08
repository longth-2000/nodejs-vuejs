import Vue from 'vue'
import App from './vuejs/App.vue'
import { router } from './vuejs/routes/routes'
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')