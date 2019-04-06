<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'v-tabs-item',
        props: {
            //是否禁用该tab选项（会呈现灰色不可点击状态）
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-item {

    }
</style>
