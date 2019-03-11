<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
        <!--插槽：允许div里面插入其他元素 如 col组件 -->
    </div>
</template>

<script>
    export default {
        name: "row",
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type: String,
                //验证用户传入的align的值
                validator(value) {
                    //查看value是否是这三个值
                    return ['left', 'right', 'center'].includes(value)
                }
            }
        },
        computed: {
            rowClass() {
                //从this中解构赋值出align
                let {align} = this
                //返回一个class 前提是有align
                return [align && `align-${align}`]
            },
            //这个属性是根据gutter属性变的。这个不能写在data中，因为data只会在created的时候会读取一次，后续发生变更不会再动态读取
            rowStyle() {
                return {
                    marginLeft: -this.gutter/2 + 'px',
                    marginRight: -this.gutter/2 + 'px'}
            }
        },
        mounted() {
            //mounted后，该组件的所有子元素也挂载完毕，可以通过this.$children 获取他们
            this.$children.forEach((vm) => {
                //vm代表每一个子元素本身 把row的gutter传递给他
                vm.gutter = this.gutter
            })
        }
    }
</script>

<style scoped lang="scss">
    .row {
        display: flex;

        &.align-left {
            justify-content: flex-start;
        }

        &.align-right {
            justify-content: flex-end;
        }

        &.align-center {
            justify-content: center;
        }
    }
</style>