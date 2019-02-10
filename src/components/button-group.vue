<template>
    <div class="v-button-group">
        <!--slot标签里面用来放多个v-button标签-->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "v-button-group"
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
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }

            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }

            &:hover {
                //hover哪一个按钮，就把当前按钮的上下左右四个border置顶
                z-index: 1;
            }

        }
    }

</style>