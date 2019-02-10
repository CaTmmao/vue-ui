import Vue from 'vue'
import Button from './components/button' //引入button组件
import ICON from './components/icon' //引入icon组件

//全局注册button, icon组件
Vue.component('v-button', Button)
Vue.component('v-icon', ICON)
new Vue({
    el: '#app',
    data: {
        //传给index.html
        loading: true
    }
})
