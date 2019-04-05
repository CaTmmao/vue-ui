//引入toast组件
import Toast from './toast/toast'

//该文件不用import Vue就可以使用Vue的原因是当使用该插件的时候会加上一句Vue.use，vue是通过use传给install方法的

//创建一个变量，值为undefined
let currentToast

//export一个对象
export default {
    //里面有个install方法，告诉vue如何安装这个插件 里面有两个参数Vue & options
    install(Vue, options) {
/*        在vue的原型链上加上一个toast方法 该方法是一个函数，接收两个参数
        第一个参数是需要弹出的内容，第二个参数是一个对象，对象的属性是toast组件中props对象中的属性*/
        Vue.prototype.$toast = function(message, toastOptions) {
            //如果toast已经存在，就关闭该toast
            if (currentToast) {
                currentToast.close()
            }
            // {}是用了解构赋值语法
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}

// 创建toast函数 由于函数里没有Vue，因此需要从上面把Vue引进去
function createToast({Vue, message, propsData, onClose}) {
    //创建一个toast的vue构造器
    let Constructor = Vue.extend(Toast)
    //new一个toast实例
    let toast = new Constructor({
        //将用户传入的对象传到toast实例中去
        propsData
    })
    //toast的slot标签中的默认内容是传入的message参数
    toast.$slots.default = message
    //把toast实例mount到内存中 这句是必须的，否则toast所有生命周期的钩子都不会执行
    toast.$mount()
    //订阅Close事件，如果发生了就调用onClose
    toast.$on('Close', onClose)
    //把元素放到body中
    document.body.appendChild(toast.$el)
    return toast
}


/* 用户在用的时候
import plugin from './plugin.js'
Vue.use(plugin)
 */