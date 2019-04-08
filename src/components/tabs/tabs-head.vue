<template>
    <div class="tabs-head">
        <!--所有tabsitem出现在这里-->
        <slot></slot>
        <!--active的tab显示下划线；写ref是为了方便获取到该div元素并设置width和left-->
        <div class="line" ref="line"></div>
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
            /*订阅 update:selected事件，由于需要获取子元素，根据vue的mounted函数执行顺序（mounted函数是将所有元素挂载完毕
            后执行，因此把update:selected事件的监听写在mounted中可以保证在此阶段可以找到该组件的子元素）*/
            // 接收两个参数，name:当前active状态的tab组件的name属性;tab:当前active状态的tab组件实例
            this.eventBus.$on('update:selected', (name, tab) => {
                // 获取该tab元素的left width信息
                let {left, width} = tab.$el.getBoundingClientRect()
                // 将该tabs-head组件refs中的line的width样式设置为当前active tab的width一样
                this.$refs.line.style.width = `${width}px`
                // 将该tabs-head组件refs中的line的left位置 设置为当前active tab的left一样
                this.$refs.line.style.left = `${left}px`
            })
        }
    }
</script>

<style scoped lang="scss">
    .tabs-head {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        height: 40px;
        border-bottom: 1px #dcdfe6 solid;
        box-sizing: content-box;

        .line {
            position: absolute;
            height: 2px;
            background: #409eff;
            bottom: 0;
            transition: all .5s;
        }

        .actions-wrapper {
            justify-self: flex-end;
            margin-left: auto;
            padding: 1em;
        }
    }
</style>
