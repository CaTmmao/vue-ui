//引入 expect 语法
const expect = chai.expect
import Vue from 'vue'
//引入 input 组件
import Input from '../src/components/input'

//describe 和 it 是mocha 的语法，会自动引入，不用我们管
describe('Input', () => {
    it('存在', () => {
        expect(Input).to.exist
    })

    //用 describe 来给 input组件 的测试用例分组， props这一组是可以接收的参数测试
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })

        it('接收 value', () => {
            vm = new Constructor({
                propsData: {
                    content: '1'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1')
        })

        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const input = vm.$el.querySelector('input')
            expect(input.disabled).to.equal(true)
        })

        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const input = vm.$el.querySelector('input')
            //readOnly 的 o 需要大写
            expect(input.readOnly).to.equal(true)
        })

        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '错误'
                }
            }).$mount()
            const icon = vm.$el.querySelector('use')
            expect(icon.getAttribute('xlink:href')).to.equal('#i-error')
            const message = vm.$el.querySelector('.error-message')
            expect(message.innerHTML).to.equal('错误')
        })
    })

    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })

        it('支持 change/input/focus/blur 事件', () => {
            //如果后续需要增加其他事件，就在数组里增加就行，不用再添加更多的测试用例
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                let input = vm.$el.querySelector('input')
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                let event = new Event(eventName)
                Object.defineProperty(event, 'target', {value: {value: 'hi'}, enumerable: true})
                input.dispatchEvent(event)
                console.log(event);
                expect(callback).to.have.been.calledWith('hi')
            })
        })

        // it('支持 change 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     //找到input元素
        //     let input = vm.$el.querySelector('input')
        //     //造一个假函数
        //     const callback = sinon.fake()
        //     //监听 vue实例的 changed 事件，事件触发后调用 callback 函数
        //     vm.$on('changed', callback)
        //     //造一个假的 change 事件
        //     let event = new Event('change')
        //     //触发 input元素的  change 事件
        //     input.dispatchEvent(event)
        //     //预测 input元素的 callback函数 被调用，并且接收到一个 event 参数
        //     expect(callback).to.have.been.calledWith(event)
        // })

        // it('支持 focus 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     let input = vm.$el.querySelector('input')
        //     let callback = sinon.fake()
        //     vm.$on('focus', callback)
        //     let event = new Event('focus')
        //     input.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        //
        // it('支持 blur 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     let input = vm.$el.querySelector('input')
        //     let callback = sinon.fake()
        //     vm.$on('blur', callback)
        //     let event = new Event('blur')
        //     input.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
    })
})

