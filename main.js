//引入vue.js
import Vue from 'vue'
// 引入vue-resource
import VueResource from 'vue-resource'
//引入App组件，他是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)
//创建vue实例
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app') //绑定root容器
