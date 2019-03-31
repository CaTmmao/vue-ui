import Vue from 'vue'
import Button from './components/button/button' //引入button组件
import Icon from './components/button/icon' //引入icon组件
import ButtonGroup from './components/button/button-group'
import Input from './components/input/input'
import Row from './components/grid/row'
import Col from './components/grid/col'
import Layout from './components/layout/layout'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Sider from './components/layout/sider'
import Content from './components/layout/content'


//全局注册button, icon等组件
Vue.component('v-layout', Layout)
Vue.component('v-header', Header)
Vue.component('v-footer', Footer)
Vue.component('v-sider', Sider)
Vue.component('v-content', Content)
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


