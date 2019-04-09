<template>
    <!--用div元素把该组件包裹起来 click事件本来应该写在默认的slot里面，默认的slot用来插入button，但是slot无法添加事件，写在div
    元素上一样-->
    <!--.stop修饰符用来阻止冒泡行为-->
    <div class="popover" @click.stop="triggerVisible">
        <div class="content-wrapper" ref="contentWrapper" v-if="visible" @click.stop>
            <!--name=content,在HTML中对应slot=content的标签-->
            <slot name="content"></slot>
            <!--默认的slot，用来做trigger触发pooover，比如放一个button在里面，click / hover / focus触发popover-->
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "v-popover",
        data () {
            return {
                //针对name为content的slot，默认不可见
                visible: false
            }
        },
        methods: {
            //切换visible的状态
            triggerVisible () {
                //切换visible的状态 true/false
                this.visible = !this.visible
                //获取triggerWrapper的位置
                let {left, top} = this.$refs.triggerWrapper.getBoundingClientRect()

                //如果当前visible是true（说明content是显示状态）
                if (this.visible === true) {
                    //如果不用异步，会直接执行监听器里面的代码，而不是等下次发生click事件才执行eventHandler里面的代码
                    setTimeout(() => {
                        //将ref为contentWrapper的元素移动到body中 移动的元素除了位置改变，其他功能都保留
                        document.body.appendChild(this.$refs.contentWrapper)
                        //将content内容的位置设置成和triggerWrapper(如button)位置一样
                        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                        //创建document的click监听器
                        document.addEventListener('click', eventHandler)
                    }, 0)

                    let eventHandler = () => {
                        //document范围发生click，隐藏content
                        this.visible = false
                        //删除listener，避免多次创建
                        document.removeEventListener('click', eventHandler)
                        console.log('document隐藏content');
                    }
                } else {
                    console.log('popover隐藏content');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        margin: 100px;
        position: relative;
    }

    //之所以不写在.popover里面是因为content显示在页面中时会被append在body中而不是放在popover中，那样样式无法生效
    .content-wrapper {
        padding: 10px 15px;
        position: absolute;
        border: 1px red solid;
        box-shadow: 0 0 0 1px #ddd;
        transform: translateY(-100%);
    }
</style>