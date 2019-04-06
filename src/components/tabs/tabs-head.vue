<template>
    <div class="tabs-head">
        <!--所有tabsitem出现在这里-->
        <slot></slot>
        <!--用于其他操作，如添加tab按钮-->
        <slot name="actions"></slot>
    </div>
</template>

<script>
    export default {
        name: 'v-tabs-head'
    }
</script>

<style scoped lang="scss">
    .tabs-head {

    }
</style>
