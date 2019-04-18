<template>
    <!--vue的transition用来给想要的元素/组件做过渡效果，name是css名-->
    <transition name="slide">
        <div class="layout-sider" v-if="visible">
        <slot></slot>
            <div @click="visible = false" class="close" v-if="closeButton">X</div>
        </div>
    </transition>
</template>

<script>
    export default {
        /* name的作用：1.vue的devtool中可以看到该组件名字；2.$options.name中可以看到
        如layout组件需要判断子组件中是否有sider组件，可以通过遍历this.$children查找每个子组件的$options
         的name是否有v-sider，那么就可以确定layout组件中是否有sider组件，然后根据情况添加layout-has-sider的class了  */
        name: 'v-sider',
        data() {
            return {
                visible: true
            }
        },
        props: {
            //是否显示close button
            closeButton: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    //enter开始 和 leave结束的状态
    .slide-enter, .slide-leave-to {
        /* 用100%是由于不知道使用者究竟设置的sider组件width是多少px，所以滑动的margin-left不好确定，但是margin-left的值当用%的时候，
        在这种情况中是和sider的宽度一样的，所以可以用100% */
        margin-left: -100%;
    }
    .slide-enter-active, .slide-leave-active {
        transition: margin-left .5s;
    }

    .layout-sider {
        position: relative;

        .close {
            position: absolute;
            top: 0;
            right: 0;
            width: 20px;
            height: 20px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>