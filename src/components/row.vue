<template>
    <div class="row" :style="{marginLeft: -gutter/2 + 'px',marginRight: -gutter/2 + 'px'}">
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
    }
</style>