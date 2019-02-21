<template>
    <svg class="v-icon">
        <use :xlink:href=`#i-${name}`></use> <!--xlink:href 前面一定要加冒号，代表是动态绑定-->
    </svg>
</template>

<script>
    import '../../svg'
    export default {
        name: "v-icon",
        props: ['name'] //接收一个name参数，参数的值是需要使用的icon类型的名字，如 setting
    }
</script>

<style scoped lang="scss">
    /*设置icon样式*/
    .v-icon {
        /*宽度和高度设置为和字体一样高*/
        width: 1em;
        height: 1em;
    }

</style>