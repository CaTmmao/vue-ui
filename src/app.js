import Vue from 'vue'
import Button from './components/button' //引入button组件
import Icon from './components/icon' //引入icon组件
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'

//全局注册button, icon组件
Vue.component('v-button', Button)
Vue.component('v-icon', Icon)
Vue.component('v-button-group', ButtonGroup)
Vue.component('v-input', Input)
Vue.component('v-row', Row)
Vue.component('v-col', Col)
new Vue({
    el: '#app',
    data: {
        //传给index.html
        loading: true,
        message: 'hi'
    },
    methods: {
        inputChange(event) {
            console.log(event.target.value)
        }
    }
})


