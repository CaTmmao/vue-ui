<template>
    <div class="collapse-item">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <!--collapse内容-->
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
            },
            name: {
                type: String
            }
        },
        data() {
            return {
                open: false
            }
        },
        mounted () {
            //监听collapse更新事件
            this.eventBus.$on('update:selected', (names) => {
                //判断当前选中的数组中是否有自己
                if (names.indexOf(this.name) >= 0) {
                    this.open = true
                    this.$el.classList.add('active')
                } else {
                    this.open = false
                    this.$el.classList.remove('active')
                }
            })
        },
        methods: {
            //切换状态
            toggle () {
                if (this.open === true) {
                    this.eventBus.$emit('remove:selected', this.name)
                } else {
                    this.eventBus.$emit('add:selected', this.name)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .collapse-item {
        cursor: pointer;
        border-bottom: 1px #dcdee2 solid;

        .title {
            transition: all .3s ease-in-out;
            margin: -1px;
            color: #333;
            padding: 0 8px;
            min-height: 32px;
            display: flex;
            align-items: center;
        }

        &.active {
            .content {
                border-top: 1px #dcdee2 solid;
            }
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
            color: #515a6e;
            padding: 10px 16px;
            background-color: #fff;
        }
    }

</style>