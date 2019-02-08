import Vue from 'vue'
import Button from './components/button' //引入button组件

//全局注册button组件
Vue.component('v-button', Button)
new Vue({
    el: '#app'
})
