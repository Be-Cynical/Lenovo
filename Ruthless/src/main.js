import Vue from 'vue'
import App from './App'
import request from './ajax'  // 引入ajax对象
import ElementUI from 'element-ui'  // 引入elementUI
import 'element-ui/lib/theme-chalk/index.css'   // 引入elementUI的css样式
import router from "./router/index"   // 引入路由对象
import moment from "moment" // 引入时间戳

Vue.config.productionTip = false
Vue.prototype.$http = request   // 将request对象赋值给vue原型对象的一个属性
Vue.use(ElementUI)  // 在vue项目中使用elementUI
Vue.prototype.$moment = moment;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
