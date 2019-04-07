<template>
    <div class="tabs-pane">
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
            this.eventBus.$on('update:selected', (name) => {
                if (name === this.name) {
                    console.log(`我是pane${this.name},active`)
                } else {
                    console.log(`我是pane${this.name}`)
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .tabs-pane {

    }
</style>
