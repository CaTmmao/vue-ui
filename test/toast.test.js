const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/components/toast/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.be.ok
  })

  //测试toast组件中的props
  describe('props', () => {
    it('接收 autoClose & autoCloseDelay', (done) => {
      //先创建一个div元素放入页面
      let div = document.createElement('div')
      document.body.appendChild(div)

      //创建toast实例
      let Constructor = Vue.extend(Toast)
      let vm = new Constructor({
        propsData: {
          autoClose: true,
          autoCloseDelay: 1
        }
      }).$mount(div)

      expect(vm.autoCloseDelay).eq(1)

      //监听toast实例的Close事件，当toast关闭后，查看body中是否还存在toast实例,异步需要调用done
      vm.$on('Close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })

    it('接收 closeButton', () => {
      //用sinon的fake模拟出一个callback
      let callback = sinon.fake()

      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭吧',
            //这里的callback是上面用sinon创建的一个假的callback
            callback
          }
        }
      }).$mount()

      const closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')

      //用原生js模拟click事件
      closeButton.click()
      //expect 该callback 被调用
      expect(callback).have.been.called
    })

    it('接收 enableHTML', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHTML: true
        }
      })
      vm.$slots.default = '<strong>s</strong>'
      //mount之前需要先将内容添加进去↑
      vm.$mount()
      const strong = vm.$el.querySelector('strong')
      expect(strong).to.be.exist
    })

    it('接收 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
})
