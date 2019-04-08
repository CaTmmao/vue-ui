const expect = chai.expect
import Vue from 'vue'
import TabsItem from '../src/components/tabs/tabs-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })

    it('接收 name 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'food'
            }
        }).$mount()

        expect(vm.$el.getAttribute('data-name')).eq('food')
    })

    it('接收 disabled 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()

        expect(vm.$el.classList.contains('disabled')).to.be.true
    })

})
