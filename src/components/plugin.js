//引入toast组件
import Toast from './toast/toast'

//该文件不用import Vue就可以使用Vue的原因是当使用该插件的时候会加上一句Vue.use，vue是通过use传给install方法的
//export一个对象
export default {
    //里面有个install方法，告诉vue如何安装这个插件 里面有两个参数Vue & options
    install(Vue, options) {
        //在vue的原型链上加上一个toast方法
        Vue.prototype.$toast = function(message) {
            //创建一个toast的vue构造器
            let Constructor = Vue.extend(Toast)
            //new一个toast实例
            let toast = new Constructor()
            //toast的slot标签中的默认内容是传入的message参数
            toast.$slots.default = message
            //把toast实例mount到内存中 这句是必须的，否则toast所有生命周期的钩子都不会执行
            toast.$mount()
            //把元素放到body中
            document.body.appendChild(toast.$el)
        }
    }
}


/* 用户在用的时候
import plugin from './plugin.js'
Vue.use(plugin)
 */