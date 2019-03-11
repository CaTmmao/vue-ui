<template>
    <div class="col" :style="colStyle" :class="colClass">
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
            },
            offset: {
                type: [Number, String]
            }
        },
        data() {
            return {
                gutter: 0,
            }
        },
        computed: {
            //这个属性是根据gutter属性变的。这个不能写在data中，因为data只会在created的时候会读取一次，后续发生变更不会再动态读取
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            },
            colClass() {
                return [
                    this.span && `col-${this.span}`,
                    this.offset && `offset-${this.offset}`
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;

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