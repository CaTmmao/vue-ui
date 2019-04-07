<template>
    <div class="tabs-head">
        <!--所有tabsitem出现在这里-->
        <slot></slot>
        <div class="actions-wrapper">
            <!--用于其他操作，如添加tab按钮-->
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'v-tabs-head',
        //tabs组件中用provide选项提供了eventBus，其他子孙组件需要用inject注入eventBus
        inject: ['eventBus'],
        mounted() {
            //订阅 update:selected事件，后面是回调
            this.eventBus.$on('update:selected', (name) => {
                console.log(name)
            })
        }
    }
</script>

<style scoped lang="scss">
    .tabs-head {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px red solid;

        .actions-wrapper {
            justify-self: flex-end;
            margin-left: auto;
        }
    }
</style>
