<template>
    <div class="tabs-pane" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'v-tabs-pane',
        data() {
            return {
                active: false
            }
        },
        props: {
            name: {
                type: String | Number,
                required: true
            }
        },
        //tabs组件中用provide选项提供了eventBus，其他子孙组件需要用inject注入eventBus
        inject: ['eventBus'],
        created() {
            /* active状态默认为false，监听下面的事件，当发现传入的name和该组件的name一致，说明当前active的tab和这个pane匹配，
            那么就设置active为true，并只显示active状态的pane */
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name
            })
        }
    }
</script>

<style scoped lang="scss">
    .tabs-pane {
        padding: 1em;
    }
</style>
