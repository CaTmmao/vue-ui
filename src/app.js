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

//引入spies
import spies from 'chai-spies'
chai.use(spies)

//单元测试：传一个输入，看输出是否和预期一致
{
    //button.vue icon: setting   expect xlink:href = #i-setting

    //使用Vue.extend构造器 此时Constructor就是一个函数
    const Constructor = Vue.extend(Button)
    //用Constructor 构造一个button实例
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    //把button挂载到id为test的元素上
    // button.$mount('#test')
    //或者不挂载到一个元素上，直接mount到内存里也可以
    vm.$mount()
    //找到button实例中的use元素
    let el = vm.$el.querySelector('use')
    //获取这个元素的 xlink:href 属性
    let href = el.getAttribute('xlink:href')
    //expect 这个元素的href 是 settings
    expect(href).to.eq('#i-settings')

    //测试完后记得删除元素
    vm.$el.remove()
    //销毁button实例
    vm.$destroy()
}

{
    //button.vue icon: setting  loading: true expect xlink:href = #i-loading

    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount()
    let el = vm.$el.querySelector('use')
    let href = el.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')

    vm.$el.remove()
    vm.$destroy()
}

{
    //button.vue icon: setting  expect order = 1

    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    //这里是把button实例挂载到了内存中，而不是页面中的某个元素，这个button实例不会被渲染到页面中，因此更不会有css样式了
   // button.$mount()
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    //ES6解构语法
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq("1")

    vm.$el.remove()
    vm.$destroy()
}

{
    //button.vue iconPosition: right    expect svg order = 2
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq("2")

    vm.$el.remove()
    vm.$destroy()
}

{
    //button.vue 测试点击button时，是否触发click事件
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
})

    vm.$mount(div)
    const button = vm.$el
    //用chai.spy模拟出一个匿名函数 赋值给常量spy
    const spy = chai.spy(() => {})
    vm.$on('click', spy)
    //模拟button的点击事件
    button.click()
    //监测spy是否被调用
    expect(spy).to.have.been.called()
}