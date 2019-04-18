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
import Plugin from './components/plugin'
import Tabs from './components/tabs/tabs'
import TabsItem from './components/tabs/tabs-item'
import TabsBody from './components/tabs/tabs-body'
import TabsHead from './components/tabs/tabs-head'
import TabsPane from './components/tabs/tabs-pane'
import Popover from './components/popover/popover'
import Collapse from './components/collapse/collapse'
import CollapseItem from './components/collapse/collapse-item'

//通过Vue.use执行plugin里的install方法
Vue.use(Plugin)

//全局注册button, icon等组件
Vue.component('v-popover', Popover)
Vue.component('v-layout', Layout)
Vue.component('v-tabs', Tabs)
Vue.component('v-tabs-item', TabsItem)
Vue.component('v-tabs-body', TabsBody)
Vue.component('v-tabs-head', TabsHead)
Vue.component('v-tabs-pane', TabsPane)
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
Vue.component('v-collapse', Collapse)
Vue.component('v-collapse-item', CollapseItem)

new Vue({
    el: '#app',
    data: {
        //传给index.html
        loading: true,
        message: 'hi',
        selectedTab: 'sports',
        selectedCollapse: ['1', '2']
    },
    methods: {
        inputChange(event) {
            console.log(event.target.value)
        },
        showToast() {
            /* 用户使用时通过this.$toast使用 第一个参数是message，代表需要弹出的内容，第二个参数是一个对象，
             可在对象中的传入的属性是其他所有toast props可接收的参数，如 enableHTML,closeButton等*/
            this.$toast('test', {
                position: 'top'
            })
        },
        yyy() {
            console.log('yyy');
        }
    }
})


