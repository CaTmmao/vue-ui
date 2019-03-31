<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'v-layout',
        data() {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted() {
            //查找该组件的所有子组件，并循环获取到每个组件
            this.$children.forEach((vm) => {
                //查看name是否为sider组件中定义的name
                if(vm.$options.name === 'v-sider') {
                    //是否是，说明该子组件就是sider组件，那么设置class为true，修改成有sider子组件的样式
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        &.hasSider {
            flex-direction: row;
        }
    }
</style>
