<template>
    <div class="tabs-item" @click="emitSelected">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'v-tabs-item',
        data () {
            return {
                active: false
            }
        },
        //tabs组件中用provide选项提供了eventBus，其他子孙组件需要用inject注入eventBus
        inject: ['eventBus'],
        props: {
            //是否禁用该tab选项（会呈现灰色不可点击状态）
            disabled: {
                type: Boolean,
                default: false
            },
            //该tab的名字
            name: {
                type: String | Number,
                required: true
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                if (name === this.name) {
                    console.log(`我是${this.name}，active`)
                } else {
                    console.log(`我是${this.name}`)
                }
            })
        },
        methods: {
            emitSelected() {
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-item {
        padding: 0 2em;
    }
</style>
