<template>
    <div class="wrapper" :class="positionClass">
        <div class="toast" ref="toast">
            <div class="message">
                <!--slot标签里传入想要弹出的内容 slot标签不能用v-html 如果用户想让传入的内容以HTML的方式渲染，那么就传入
                enableHTML参数为true-->
                <slot v-if="!enableHTML"></slot>
                <!-- 如果用户想把弹出的内容以HTML方式显示就传入enableHTML:true
                在plugin.js中，用户传入的message数组被传入了toast组件的$slots.default中，所以这里当作
                     HTML渲染时，值取的是this(toast组件实例)中$slots.default的内容-->
                <div v-else v-html="this.$slots.default"></div>
            </div>

            <!--竖线-->
            <div class="line" ref="line"></div>

            <!--关闭按钮-->
            <span v-if="closeButton" class="close" @click="clickCloseButton">
            <!--关闭按钮的内容，默认是 [关闭]-->
            {{closeButton.text}}
        </span>
        </div>
    </div>
</template>

<script>
    /* export的对象是构造组件的选项
    相当于 Vue.component('xxx', {
        name: 'xx'
    }) 中的第二个参数这个对象一样
     */
    export default {
        name: 'v-toast',
        props: {
            //显示的位置
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    //验证value是否是该数组里的值 >=0说明存在
                    return ['top', 'middle', 'bottom'].indexOf(value) >= 0
                }
            },
            //自动关闭
            autoClose: {
                type: Boolean,
                default: true
            },
            //自动关闭延迟时间
            autoCloseDelay: {
                type: Number,
                default: 3
            },
            //关闭按钮
            closeButton: {
                type: Object,
                /* 虽然这个属性是对象类型，但是default不能写成对象类型，要用一个函数返回一个对象，是因为如果页面中
                多次使用该对象，那么都会变成都引用同一对象，当其中一个发生变化时，其他的也会发生变化，因此这里需要用一个函数返回对象*/
                default() {
                    return {
                        //关闭按钮默认的文字为[关闭]
                        text: '关闭',
                        //回调函数默认没有，如果用户需要在按钮关闭完成后执行回调，就传入一个callback参数
                        callback: undefined
                    }
                }
            },
            //关闭按钮的内容是否以HTML方式渲染 由于用HTML渲染会有风险，所以默认是false
            enableHTML: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            /* 将toast的高度赋值给分隔线 注意：下面的style只能获取到内联样式不能获取到css样式
             因此不能用 this.$refs.toast.style.height直接赋值
             如 this.$refs.line.style.height = this.$refs.toast.style.height
             需要用异步接收css，因为在plugin.js中，是先mount，再把元素加到body中
             */
            this.lineHeight()

            //调用自动关闭函数
            this.autoCloseFn()
        },
        computed: {
            //返回一个class 用来给不同position的toast设置样式
            positionClass() {
                return [`position-${this.position}`]
            }
        },
        methods: {
            //自动关闭函数
            autoCloseFn() {
                //当 autoClose 为 true，同时不存在关闭按钮才执行
                if (this.autoClose && !this.closeButton) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            //关闭
            close() {
                //把元素从页面中移除 这句一定要写 destroy并不会把元素从页面中删掉
                this.$el.remove()
                /* 触发Close事件，plugin.js文件中会订阅该事件
                如果toast在被第二个创建前已经在页面上被关闭（不管是手动还是自动），就将plugin.js中的currentToast设置为null，
                 因为plugin.js中的currentToast不会自动变成null，如果再次点击按钮创建toast的时候，
                 还是会因为currentToast为true（具体看里面的if判断语句）而再次调用toast组件中的close函数，因此这么做
                 是为了减少多余的函数调用 */
                this.$emit('Close')
                //销毁组件
                this.$destroy()
            },
            //点击关闭按钮
            clickCloseButton() {
                //关闭toast
                this.close()
                //如果用户传了按钮关闭后的回调，触发关闭按钮的回调
                if (this.closeButton.callback) {
                    this.closeButton.callback()
                }
            },
            //给分隔线设置高度
            lineHeight() {
                /* 由于在plugin.js中，我们的toast实例是先mount，再被append到body中，因此在mounted钩子函数中还无法
                获取到页面中的toast高度，这里需要异步 */
                this.$nextTick(() => {
                    /*
                    由于this.$refs.toast.style只能获取到HTML中的内联样式，无法获取到toast在网页中
                    实际的height，因此我们不能通过下面的方式进行赋值
                    this.$refs.line.style.height = this.$refs.toast.style.height
                     */
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, .75);

    //出现时的动画
    //position-bottom
    @keyframes slide-down-in {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    //position-bottom
    @keyframes slide-up-in {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    //position-middle
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    //专门用来做居中
    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.position-top {
            top: 0;
            .toast {
                animation: slide-down-in .3s;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }

        &.position-bottom {
            bottom: 0;
            .toast {
                animation: slide-up-in .3s;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
            .toast {
                animation: fade-in .3s;
            }
        }
    }

    .toast {
        background: $toast-bg;
        border-radius: 4px;
        color: #fff;
        //padding一般是 4 / 8 的倍数
        padding: 0 16px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
        font-size: $font-size;
        min-height: $toast-min-height;
        display: flex;
        align-items: center;
        line-height: 1.8;

        .message {
            padding: 7px 0;
        }

        .line {
            border-left: 1px solid #666;
            margin: 0 16px;
            height: 100%;
        }

        .close {
            //禁止文字收缩
            flex-shrink: 0;
        }
    }
</style>