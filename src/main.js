import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import { Button, Select, Dialog , Container} from 'element-ui';

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  "render": h => h(App)
}).$mount('#app');
