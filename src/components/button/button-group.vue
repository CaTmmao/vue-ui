<template>
    <div class="v-button-group">
        <!--slot标签里面用来放多个v-button标签-->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "v-button-group",
        mounted() {
            this.checkChild()
        },
        methods: {
            checkChild () {
                // 循环v-button-group元素的子元素
                for (let node of this.$el.children) {
                    if (node.nodeName !== 'BUTTON') {
                        console.warn(`v-button-group里面只能包含v-button标签，你写的是${node.nodeName.toLowerCase()},可能造成css样式混乱`)
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-button-group {
        //让里面的v-button靠在一起
        display: inline-flex;
        //当有其他v-button的时候，按钮高度一致
        vertical-align: middle;

        > .v-button {
            border-radius: 0;

            &:not(:first-child) {
                //达到中间按钮border只有一条的效果
                margin-left: -1px;
            }

            &:first-child {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }

            &:last-child {
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }

            &:hover {
                //hover哪一个按钮，就把当前按钮的上下左右四个border置顶
                z-index: 1;
            }

        }
    }

</style>