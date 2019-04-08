const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/components/tabs/tabs'
import TabsItem from '../src/components/tabs/tabs-item'
import TabsBody from '../src/components/tabs/tabs-body'
import TabsHead from '../src/components/tabs/tabs-head'
import TabsPane from '../src/components/tabs/tabs-pane'

Vue.component('v-tabs', Tabs)
Vue.component('v-tabs-item', TabsItem)
Vue.component('v-tabs-body', TabsBody)
Vue.component('v-tabs-head', TabsHead)
Vue.component('v-tabs-pane', TabsPane)
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
