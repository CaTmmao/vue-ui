<template>
    <div class="wrapper">
        <!-- :class="{'error': error}" 的简写 如果有error 就添加error class -->
        <input type="text" :value="content" :disabled="disabled" :readonly="readonly" :class="{error}">
        <template v-if="error">
            <icon name="error"></icon>
            <div class="error-message">{{error}}</div>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'

    export default {
        name: 'v-input',
        components: {
            Icon
        },
        props: {
            //接收一个 content 参数，是 input 框的 value 值
            content: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    /*scss变量*/
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 14px;
    $box-shadow-color: rgba(0, 0, 0, .5);
    $red: #f14530;

    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        > *:not(:last-child) {
            margin-right: .5em;
        }

        > input {
            height: $height;
            border: 1px solid $border-color;
            padding: 0 8px;
            font-size: inherit;
            border-radius: $border-radius;
            outline: none;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }

            &[disabled] {
                color: #aaa;
                border-color: #aaa;
                cursor: not-allowed;
            }

            &.error {
                border-color: $red;
            }
        }

        .error-message {
            color: $red;
        }
    }
</style>