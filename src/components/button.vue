<template>
    <button class="v-button" :class="{[`icon-${iconPosition}`]: true}">
        <!-- 获取iconPosition的值，设置他的值为true，这样值就会被设置成class -->
        <!--增加icon-->
        <svg class="icon" v-if="icon"> <!-- 当icon 存在时才显示，避免使用者没有传入icon参数时还会出现这个标签 -->
            <use :xlink:href=`#i-${icon}`></use> <!--xlink:href 前面一定要加冒号，代表是动态绑定-->
        </svg>
        <span class="text">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        name: "v-button",
        props: ['icon', 'iconPosition'], //icon:图标类型； position:图标位置；
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
            > .icon {
                order: 2;
            }
        }
    }

    /*设置icon样式*/
    .icon {
        /*宽度和高度设置为和字体一样高*/
        width: 1em;
        height: 1em;
    }

</style>