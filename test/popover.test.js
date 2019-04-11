const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/components/popover/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe( 'Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })

    it('接收 position', (done) => {
        Vue.component('v-popover', Popover)
        const div = document.createElement('div')
        div.innerHTML = `
        <v-popover position="bottom" ref="content">
            <template slot="content"> 
                <div>test</div>
            </template>
            <button>点击弹出popover</button>
        </v-popover>
        `

        document.body.appendChild(div)

        const vm = new Vue({
            el: div
        })

        /* 由于popover组件只有发生click事件后才会显示content，才能检查content是否有position相关的class,
        因此需要找到button模拟click事件 */
        vm.$el.querySelector('button').click()

        //发生click事件后，不可能马上就可以获取到content，因此使用异步
        vm.$nextTick(() => {
            /* 这里的vm只是div的实例，而不是popover组件的实例，因此无法获取到vm.$refs.contentWrapper，只能在HTML中添加一个ref，
            通过这个ref就可以获取到popover组件，再从中获取到popover组件中的refs */
            let {contentWrapper} = vm.$refs.content.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true
            done()
        })




    })
})
