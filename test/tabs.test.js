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

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })

    it('接收 selected', () => {
        let div = document.createElement('div')
        div.innerHTML = `
      <v-tabs selected="food">
        <v-tabs-head>
            <v-tabs-item name="sports">运动</v-tabs-item>
            <v-tabs-item name="food">吃饭</v-tabs-item>
        </v-tabs-head>
        <v-tabs-body>
            <v-tabs-pane name="sports">运动相关资讯</v-tabs-pane>
            <v-tabs-pane name="food">吃饭相关资讯</v-tabs-pane>
        </v-tabs-body>
      </v-tabs> 
        `

        document.body.appendChild(div)
        let vm = new Vue({
            el: div
        })

        //由于在tabs组件中在mounted函数执行时才会将active class添加到子组件中，因此，需要用nextTick
        vm.$nextTick(() => {
            //判断吃饭的tab是否有active class

            //获取吃饭的tab
            let el = vm.$el.querySelector('[data-name=food]')
            //该元素的class中包含有active的class
            expect(el.classList.contains('active')).to.be.true
        })
    })
})
