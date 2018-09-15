import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
// import meishi from './pages/Side_Detail.vue'
import lazyload from 'vue-lazyload'
Vue.use(lazyload,{
  loading:'../static/timg.gif',
  // loading:'../static/tubo.gif'
})
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  // render:c=>c(meishi),
  router,
  components: { App },
  template: '<App/>'
})
