<template>
    <button class="v-button">按钮</button>
</template>

<script>
    export default {
        name: "v-button"
    }
</script>

<style scoped lang="scss">
    .v-button {
        /* 使用scss变量  */
        height: var(--button-height);
        font-size: var(--font-size);
        /* button 不要用width固定宽度 用padding制造间隙 */
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
    }

</style>