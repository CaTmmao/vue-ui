<template>
    <div class="tabs-item" @click="emitSelected" :class="itemClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'v-tabs-item',
        data () {
            return {
                //当前tab是否是active状态
                active: false
            }
        },
        computed: {
            itemClass() {
                return {
                    //this.active为true时，就应用active为class
                    active: this.active
                }
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
                //当name就是当前tab的name时，设置这个tab为active状态
                this.active = name === this.name
            })
        },
        methods: {
            emitSelected() {
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-item {
        cursor: pointer;
        padding: 0 1em;
        height: 100%;
        display: flex;
        align-items: center;

        &.active {
            color: #409eff;
            font-weight: bold;
        }
    }
</style>
