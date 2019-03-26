<template>
    <div class="col" :style="colStyle" :class="colClass">
        <slot></slot>
        <!--插槽：允许col组件内插入其他元素-->
    </div>
</template>

<script>
    //用来验证ipad narrowPc pc widePc
    let validator = (value) => {
        //检查使用者传入的对象里的key
        let keys = Object.keys(value)
        //先设置验证结果为true
        let valid = true
        //如果传入的key不被包含在这个数组里
        if (!['span', 'offset'].includes(keys)) {
            //把验证结果设置为false
            valid = false
        }
        //返回结果
        return valid
    }
    export default {
        name: 'v-col',
        props: {
            //占的比例
            //该ui框架移动端优先，span & offset默认为移动端类型，因此框架使用者在传入这两个参数时会默认是给移动端设置的
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            //用来做响应式，如果做的是移动端，那么span,offset默认为phone，如果是做PC端的，那么默认为pc
            //响应式一共支持五种，ipad narrowPc pc widePc（默认为phone）
            //ES6,如果key和value值一样，直接写一个就可以
            ipad: {type: Object, validator},
            narrowPc: {type: Object, validator},
            pc: {type: Object, validator},
            widePc: {type: Object, validator}
        },
        data() {
            return {
                gutter: 0,
            }
        },
        methods: {
            /* 根据传入的ipad/narrowpc/pc/widepc对象 动态绑定class
            两个参数，第一个参数obj是一个对象,接收span和offset两个属性，如{span: 1, offset: 24}
            第二个参数是对设备的描述，如 'pc', 'ipad', 如果是传入默认的phone移动端，那么不用传入参数str，默认为''空字符串 */
            createClasses(obj, str = '') {
                //如果框架使用者没有传入该对象，返回一个空数组
                if (!obj) {return []}
                let array = []
                /* 如: col-narrow-pc-1 str: narrow-pc- span:1
                如果obj有span存在，那么数组中添加一个class */
                if (obj.span) {array.push(`col-${str}${obj.span}`)}
                 // 如果obj有offset存在，那么数组中添加一个class
                if (obj.offset) {array.push(`col-${str}${obj.offset}`)}
                // 把带有Class的数组return 回去
                return array
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
            //返回的class
            colClass() {
                //在this中查找需要的属性
                let {span, offset, ipad, narrowPc, pc, widePc} = this
                //从vue实例中寻找这个函数（methods中的方法可以在this中获取到）
                let {createClasses} = this
                //return 一个带有class的数组
                return [
                    //span存在才会增加这个class
                    span && `col-${span}`,
                    //offset存在返回这个class
                    offset && `offset-${offset}`,
                    //调用这个方法，传入一个对象，这个方法会返回一个class数组回来
                    ...createClasses({span, offset}),
                    //调用这个对象时可传入一个str参数，如ipad-，代表这是针对ipad的
                    ...createClasses(ipad, 'ipad-'),
                    ...createClasses(narrowPc, 'narrow-pc-'),
                    ...createClasses(pc, 'pc-'),
                    ...createClasses(widePc, 'wide-pc-')
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

        //响应式:
        //ipad
        @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }

            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }


        //narrow-pc
        @media (min-width: 769px) {
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }

            $class-prefix: offset-narrow-pc;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }

        //pc
        @media (min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }

            $class-prefix: offset-pc;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }

        //wide pc
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }

            $class-prefix: offset-wide-pc;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
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