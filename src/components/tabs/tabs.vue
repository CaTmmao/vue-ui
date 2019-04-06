<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
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
        created() {
            //在created阶段必须触发一个update:selected事件，才能使用户使用时写的 :selected.sync有用，事件的值还不知道，假装是xxx
            this.$emit('update:selected', 'xxx')
        }
    }
</script>

<style scoped lang="scss">
    .tabs {

    }
</style>