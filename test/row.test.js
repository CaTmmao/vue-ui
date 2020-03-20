//引入chai.js的expect语法
const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/components/grid/row'
//虽然这是row的单元测试，由于row组件中的一些属性会影响col组件的样式，因此也需要引入col组件以通
import Col from '../src/components/grid/col'

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.exist
  })

  /*it语法属于mocha工具，mocha默认我们的代码都是同步的，因此就算用了setTimeout等这种
  异步代码也不会执行setTimeout里面的内容，当同步代码执行完后就会关闭页面，如果想
   执行异步，那么就在it的括号里面加入一个done参数，并在异步代码执行完毕后调用donejkj*/
  it('接收 gutter 属性', (done) => {
    //全局创建row和col组件
    Vue.component('v-row', Row)
    Vue.component('v-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
            <v-row gutter="20">
                <v-col span="12"></v-col>
                <v-col span="12"></v-col>
            </v-row>
        `

    //vue示例绑定到div上
    const vm = new Vue({
      el: div
    })

    //这里可以通过class .row找到是因为在row.vue组件中已经给他添加了一个row class
    const row = vm.$el.querySelector('.row')
    expect(getComputedStyle(row).marginLeft).to.eq('-10px')
    expect(getComputedStyle(row).marginRight).to.eq('-10px')

    setTimeout(() => {
      //有两个col标签
      /* row组件的gutter属性是在mounted钩子函数被调用的时候传递给子组件col的，而mounted是异步触发，
      而且需要等所有同步代码执行完毕后才会执行，因此不能同步的得知row组件的gutter属性对子组件col
      产生的css样式影响 需要通过setTimeout异步方式才能获取到 */
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
      //异步代码执行完毕后调用done函数告知mocha
      done()
      //setTimeout后面省略秒数不写也可以
      //元素reeeee
      vm.$el.remove()
      //销毁vue实例
      vm.$destroy()
    })
  })

  it('接收 align 属性', () => {
    var div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'center'
      }
    }).$mount(div)
    const row = vm.$el
    expect(getComputedStyle(row).justifyContent).to.eq('center')
    vm.$el.remove()
    vm.$destroy()
  })
})
