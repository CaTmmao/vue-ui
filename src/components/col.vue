<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
        <!--插槽：允许col组件内插入其他元素-->
    </div>
</template>

<script>
    export default {
        name: 'v-col',
        props: {
            //占的比例
            span: {
                type: [Number, String]
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;
        width: 50%;
        border: 1px red solid;

        /*前缀是 col- */
        $class-prefix: col-;
        /*-- scss 的插值语法 # {}  类似js插值语法 ${} */
        /*从 1 循环到 24*/
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
    }
</style>