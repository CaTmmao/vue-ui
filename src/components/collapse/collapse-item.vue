<template>
    <div class="collapse-item">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'v-collapse-item',
        inject: ['eventBus'],
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                open: false
            }
        },
        mounted () {
            this.eventBus && this.eventBus.$on('update:selected', (vm) => {
                //除了该collapse，关闭其他所有collapse
                if (this !== vm) {
                    this.close()
                }
            })
        },
        methods: {
            //切换collapse的开关状态
            toggle () {
                if (this.open) {
                    this.open = false
                } else {
                    this.open = true
                    this.eventBus && this.eventBus.$emit('update:selected', this)
                }
            },
            //关闭collapse
            close () {
                this.open = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .collapse-item {

        .title {
            margin: -1px;
            border: 1px solid #ddd;
            padding: 0 8px;
            min-height: 32px;
            display: flex;
            align-items: center;
        }

        &:first-child {
            .title {
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }
        }

        &:last-child {
            //当最后一个元素中的title同时也是最后一个内容，也就是title后面没有其他内容时就应用该样式
            .title:last-child {
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
            }
        }

        .content {
            padding: 8px;
        }
    }

</style>