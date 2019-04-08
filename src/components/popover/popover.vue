<template>
    <!--用div元素把该组件包裹起来 click事件本来应该写在默认的slot里面，默认的slot用来插入button，但是slot无法添加事件，写在div
    元素上一样-->
    <div class="popover" @click="triggerVisible">
        <div class="content-wrapper" v-if="visible">
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
                this.visible = !this.visible
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