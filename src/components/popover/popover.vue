<template>
    <!--用div元素把该组件包裹起来 click事件本来应该写在默认的slot里面，默认的slot用来插入button，但是slot无法添加事件，写在div
    元素上一样-->
    <div class="popover" @click="triggerVisible">
        <div class="content-wrapper" ref="contentWrapper" v-if="visible">
            <!--name=content,在HTML中对应slot=content的标签-->
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" class="triggerWrapper">
            <!--默认的slot，用来做trigger触发pooover，比如放一个button在里面，click / hover / focus触发popover显示上面的content-->
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "v-popover",
        data () {
            return {
                //针对name为content的slot，默认不可见
                visible: false
            }
        },
        methods: {
            //切换visible的状态
            triggerVisible (e) {
                //button包含e.target，说明用户点击的是button
                if (this.$refs.triggerWrapper.contains(e.target)) {
                    //如果当前visible是true（说明content是显示状态）
                    if (this.visible === true) {
                        //关闭content
                        this.closePopover()
                    } else {
                        //显示content
                        this.showPopover()
                        /*如果不用异步，会直接执行document监听器里面的代码（比如：用户监听元素A的click事件1，该click事件里面
                          会有一个if判断，当判断为true，会给document增加一个click的监听器，这里称为事件2，当用户第一次点击元素A时，
                          事件1会被触发，然后里面的if会进行判断，如果为true，继续执行里面的代码也就是给document增加一个click监听器，
                          而这个监听器立马察觉到这一次用户就是click了这个div，所以这个监听器会被立马执行，而不是，先创建了这个监听器，
                          等用户下次再触发click时才调用监听器指定的函数。）*/
                        setTimeout(() => {
                            //创建document的click监听器
                            document.addEventListener('click', this.eventHandler)
                        }, 0)
                    }
                }
            },
            eventHandler (event) {
                /*如果当前点击的元素(event.target)被包含在contentWrapper中，说明用户点击的是content内容，
                  用户也许想法是想复制里面的内容，因此在这种情况下不要关闭content*/
                if (!(this.$refs.contentWrapper && this.$refs.contentWrapper.contains(event.target))) {
                    //document中除了content的其他范围发生click，关闭content
                    this.closePopover()
                }
            },
            //关闭popover
            closePopover () {
                this.visible = false
                //移除document的click监听器
                document.removeEventListener('click', this.eventHandler)
            },
            //显示popover的content
            showPopover () {
                this.visible = true
                setTimeout(() => {
                    //将content移动到button上方
                    this.moveContentPosition()
                }, 0)
            },
            //把content内容移动到button上方
            moveContentPosition () {
                //获取triggerWrapper(button)的位置
                let {left, top} = this.$refs.triggerWrapper.getBoundingClientRect()

                //将ref为contentWrapper的元素移动到body中 移动的元素除了位置改变，其他功能都保留
                document.body.appendChild(this.$refs.contentWrapper)

                //将content内容的位置设置成和triggerWrapper(如button)位置一样
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        margin: 100px;
        position: relative;

        .triggerWrapper {
            display: inline-block;
        }
    }

    //之所以不写在.popover里面是因为content显示在页面中时会被append在body中而不是放在popover中，那样样式无法生效
    .content-wrapper {
        padding: 10px 15px;
        margin-top: -10px;
        position: absolute;
        border: 1px #333 solid;
        border-radius: 3px;
        //用drop-shadow是为了解决box-shadow不会应用&::before三角形的问题 但是这个必须配合background一起写
        filter: drop-shadow(0 1px 1px #aaa);
        background: #fff;
        transform: translateY(-100%);
        max-width: 20em;
        //自动换行
        word-wrap: break-word;

        &::before,
        &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            position: absolute;
            top: 100%;
        }

        &::before {
            border-top-color: #333;
        }

        &::after {
            border-top-color: #fff;
            top: calc(100% - 1px);
        }
    }
</style>