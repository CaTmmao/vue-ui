<template>
    <div class="sider">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        /* name的作用：1.vue的devtool中可以看到该组件名字；2.$options.name中可以看到
        如layout组件需要判断子组件中是否有sider组件，可以通过遍历this.$children查找每个子组件的$options
         的name是否有v-sider，那么就可以确定layout组件中是否有sider组件，然后根据情况添加layout-has-sider的class了  */
        name: 'v-sider'
    }
</script>

<style lang="scss" scoped>
    .sider {

    }
</style>