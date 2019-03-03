<template>
    <div class="row">
        <slot></slot>
        <!--插槽：允许div里面插入其他元素 如 col组件 -->
    </div>
</template>

<script>
    export default {
        name: "row"
    }
</script>

<style scoped lang="scss">
    .row {
        display: flex;
    }
</style>