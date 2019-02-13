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

//引入chai
import chai from 'chai'
const expect = chai.expect

//单元测试：传一个输入，看输出是否和预期一致
{
    //使用Vue.extend构造器 此时Constructor就是一个函数
    const Constructor = Vue.extend(Button)
    //用Constructor 构造一个button实例
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    //把button挂载到id为test的元素上
    button.$mount('#test')
    //找到button实例中的use元素
    let el = button.$el.querySelector('use')
    //获取这个元素的 xlink:href 属性
    let href = el.getAttribute('xlink:href')
    //expect 这个元素的href 是 settings
    expect(href).to.eq('#i-settings')
}
