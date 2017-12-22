import 'babel-polyfill'
import Vue from 'vue'
import Cube from 'cube-ui'
import App from './App'
import router from './router'
import store from './store';
import 'font-awesome/css/font-awesome.css'
// import VConsole from 'vconsole';
// var vConsole = new VConsole();
Vue.use(Cube)

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     // checkLogin()
//     next();
//   } else {
//     next();
//   }
//   next();
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// document.addEventListener('deviceready', function () {
//   new Vue({
//     el: '#app',
//     router,
//     store,
//     render: h => h(App)
//   })
//   window.navigator.splashscreen.hide()
// }, false);
