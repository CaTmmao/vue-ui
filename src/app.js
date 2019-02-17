import Vue from 'vue'
import Button from './components/button' //引入button组件
import Icon from './components/icon' //引入icon组件
import ButtonGroup from './components/button-group'

//全局注册button, icon组件
Vue.component('v-button', Button)
Vue.component('v-icon', Icon)
Vue.component('v-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data: {
        //传给index.html
        loading: true
    }
})


