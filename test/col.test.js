//引入chai.js的expect语法
const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/components/grid/col'

describe('Col', () => {
  it('存在', () => {
    expect(Col).to.exist
  })

  it('接收 span 属性', () => {
    var div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: '1'
      }
    }).$mount(div)
    const col = vm.$el
    //expect col组件的class中包含一个叫 col-1 的class
    expect(col.classList.contains('col-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })

  it('接收 offset 属性', () => {
    var div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: '1'
      }
    }).$mount(div)
    const col = vm.$el
    //expect col组件的class中包含一个叫 offset-1 的class
    expect(col.classList.contains('offset-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })

  it('接收 ipad 属性', () => {
    var div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        ipad: { span: 1, offset: 1 }
      }
    }).$mount(div)
    const col = vm.$el
    expect(col.classList.contains('col-ipad-1')).to.eq(true)
    expect(col.classList.contains('offset-ipad-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })

  it('接收 narrowPc 属性', () => {
    var div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        narrowPc: { span: 1, offset: 1 }
      }
    }).$mount(div)
    const col = vm.$el
    expect(col.classList.contains('col-narrow-pc-1')).to.eq(true)
    expect(col.classList.contains('offset-narrow-pc-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })

  it('接收 pc 属性', () => {
    var div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc: { span: 1, offset: 1 }
      }
    }).$mount(div)
    const col = vm.$el
    expect(col.classList.contains('col-pc-1')).to.eq(true)
    expect(col.classList.contains('offset-pc-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })

  it('接收 widePc 属性', () => {
    var div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        widePc: { span: 1, offset: 1 }
      }
    }).$mount(div)
    const col = vm.$el
    expect(col.classList.contains('col-wide-pc-1')).to.eq(true)
    expect(col.classList.contains('offset-wide-pc-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
})
