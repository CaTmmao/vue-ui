<template>
    <button class="v-button" :class="{[`icon-${iconPosition}`]: true}">
        <!-- 获取iconPosition的值，设置他的值为true，这样值就会被设置成class -->
        <v-icon v-if="icon" :name="icon"></v-icon>
        <v-icon class="loading" name="loading"></v-icon>
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
                default: 'left'
            },
            validator(value) {
                return value === 'right';
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
    }


</style>