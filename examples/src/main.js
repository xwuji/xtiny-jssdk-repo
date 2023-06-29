import Vue from 'vue';
import App from './App.vue';
import '@/styles/index.scss';
import router from './router';
import mySdk from '../../lib/index';
try {
  Vue.prototype.$mySdk = mySdk;
} catch (error) {
  console.log(error);
}
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
