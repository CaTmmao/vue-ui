<template>
    <div class="toast">
        <!--slot标签里传入想要弹出的内容-->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'v-toast'
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, .75);
    .toast {
        background: $toast-bg;
        border-radius: 4px;
        color: #fff;
        //padding一般是 4 / 8 的倍数
        padding: 0 16px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
        font-size: $font-size;
        height: $toast-height;
        display: flex;
        align-items: center;
        line-height: 1.8;
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>