<template>
    <!--由于使用者直接给v-button标签添加的click事件不会生效，因此需要在button组件中给button添加一个click事件，当button被点击时，触发这个组件的click事件-->
    <button class="v-button" @click="$emit('click')" :class="{[`icon-${iconPosition}`]: true}">
        <!-- 获取iconPosition的值，设置他的值为true，这样值就会被设置成class -->
        <v-icon v-if="icon && !loading" :name="icon"></v-icon>
        <!--loading 效果 name参数默认是loading-->
        <v-icon class="loading" v-if="loading" name="loading"></v-icon>
        <span class="text">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        name: "v-button",
        //icon:图标类型； position:图标位置；
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    // 值只能是 right / left， 否则报错
                    return value === 'right' || value === 'left';
                }
            },
            loading: {
                type: Boolean,
                default: false,
                validator(value) {
                    // 值只能是true / false ,否则报错
                    return value === true || value === false
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-button {
        /* 使用scss变量  */
        height: var(--button-height);
        font-size: var(--font-size);
        /* button 不要用width固定宽度 用padding制造间隙 */
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        vertical-align: middle;
        align-items: center;
        justify-content: center;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        span.text {
            margin: 0 2px;
        }

        &.icon-right {
            > .v-icon {
                order: 2;
            }
        }

        /*loading icon 无限旋转效果*/
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        .loading {
            animation: spin infinite 1s linear;
        }

        /* 设置icon样式 */
        .icon {
            /*宽度和高度设置为和字体一样高*/
            width: 1em;
            height: 1em;
        }
    }

</style>