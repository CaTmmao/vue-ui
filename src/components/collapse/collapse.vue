<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'v-collapse'
    }
</script>

<style scoped lang="scss">
    .collapse {
        border: 1px #ddd solid;
        border-radius: 4px;
        margin: 100px;
    }
</style>