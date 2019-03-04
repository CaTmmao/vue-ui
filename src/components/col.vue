<template>
    <!--offset && offset-${offset} 里的 && 作用是：当 offset 的值在布尔值中为true时，才会增加这个 class，如果删掉 offset && 这部分，那么如果使用者没有传入
    offset 参数时，会有 offset-undefined 这个 class -->
    <div class="col" :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}" :class="[span && `col-${span}`, offset && `offset-${offset}`]">
        <div style="border: 1px green solid;height: 100%;">
            <slot></slot>
        </div>
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
            },
            offset: {
                type: [Number, String]
            }
        },
        data() {
            return {
                gutter: 0
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;
        width: 50%;

        /*计算每列宽度*/
        /*前缀是 col- */
        $class-prefix: col-;
        /*-- scss 的插值语法 # {}  类似js插值语法 ${} */
        /*从 1 循环到 24*/
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        /*计算间隔*/
        /*前缀是 offset 变量可以重复使用*/
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>