<template>
    <!--用div元素把该组件包裹起来 click事件本来应该写在默认的slot里面，默认的slot用来插入button，但是slot无法添加事件，写在div
    元素上一样-->
    <!--.stop修饰符用来阻止冒泡行为-->
    <div class="popover" @click.stop="triggerVisible">
        <div class="content-wrapper" v-if="visible" @click.stop>
            <!--name=content,在HTML中对应slot=content的标签-->
            <slot name="content"></slot>
            <!--默认的slot，用来做trigger触发pooover，比如放一个button在里面，click / hover / focus触发popover-->
        </div>
        <slot></slot>
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

                //如果当前visible是true（说明content是显示状态）
                if (this.visible === true) {
                    //如果不用异步，会直接执行监听器里面的代码，而不是等下次发生click事件才执行eventHandler里面的代码
                    setTimeout(() => {
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

        .content-wrapper {
            padding: 10px 15px;
            position: absolute;
            bottom: 100%;
            border: 1px red solid;
            box-shadow: 0 0 0 1px #ddd;
        }
    }

</style>