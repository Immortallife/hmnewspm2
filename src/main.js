import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant -ui
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入amfe-flex-ible设置rem基准值
import 'amfe-flexible/index.js'
Vue.use(Vuex)
Vue.use(Vant)
Vue.config.productionTip = false
// const store = new Vuex.Store({
//   state:{
//     count:100
//   },
//   mutations:{
//     setCount(){
//       state.count= 200
//     }
//   },
//   actions(){

//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
