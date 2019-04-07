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
        created() {
            /*在created阶段必须触发一个update:selected事件，才能使用户使用时写的 :selected.sync有用，事件的值还不知道，假装是xxx
                        this.$emit('update:selected', 'xxx')*/
        },
        //在mounted阶段该组件的所有子组件已经完成挂载
        mounted() {
            //触发事件，传入当前tab的name，tabs-item和tabs-pane监听，是谁就active谁
            this.eventBus.$emit('update:selected', this.selected)
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