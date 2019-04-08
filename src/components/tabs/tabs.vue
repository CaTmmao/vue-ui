<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    //import vue主要是因为在该组件写事件中心时需要用到Vue
    import Vue from 'vue'
    export default {
        name: 'v-tabs',
        props: {
            //当前选中的tab
            selected: {
                type: String,
                required: true
            },
            //tab排列方向：横向/竖向
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].includes(value)
                }
            }
        },
        data () {
            return {
                /*用data做中转做一个eventBus，传递到provide选项中，自己便可访问到自己组件中创建的事件中心
                log出this即可在vue实例中找到eventBus该选项 注意：log出来的有$开头的属性是我们用的，_开头的属性是vue作者自己用*/
                eventBus: new Vue()
            }
        },
        //在mounted阶段该组件的所有子组件已经完成挂载
        mounted() {
            //首次渲染tabs组件时
            this.emitUpdateSelected()

        },
        methods: {
            //首次渲染tabs组件时
            emitUpdateSelected () {
                // 循环该组件实例的子组件（this.$children返回的是数组因此可以用forEach循环）
                this.$children.forEach((vm) => {
                    // 如果子组件的name是v-tabs-head，说明该组件是tabs-head组件
                    if (vm.$options.name === 'v-tabs-head') {
                        // 循环tabs-head组件的子组件（每一个都是一个tab组件:tabs-item）
                        vm.$children.forEach((tab) => {
                            // 如果this.selected(active的tab) === 当前循环到的tab组件的name，说明该tab组件正式当前active的tab组件
                            if (this.selected === tab.name) {
                                // 触发事件，传入当前active的name和tab组件实例
                                this.eventBus.$emit('update:selected', this.selected, tab)
                            }
                        })
                    }
                })
            }
        },
        /*只要在provide中创建了事件中心，那么该组件的所有子孙都可以访问到eventBus，provide是唯一一个跨组件都可以调用
                （所有子孙）的属性，其他的属性都是只能提供给子组件，不提供给孙子。只有provide是任何后代都可以访问的*/
        provide () {
            return {
                /* new Vue()是一个eventBus，就是一个vue实例。
                eventBus: new Vue()
                但是通过↑方式写的话，在自己组件中无法通过this获取到eventBus，所以我们需要用data选项做中转 */
                eventBus: this.eventBus
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs {
    }
</style>