import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Input,layout,menu,icon } from 'ant-design-vue';

// Vue.component(Button.name, Button);
Vue.use(Button).use(Input).use(layout).use(menu).use(icon);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
