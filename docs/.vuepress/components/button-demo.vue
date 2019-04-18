<template>
    <div>
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <v-button>默认按钮</v-button>
        <v-button icon="setting">设置按钮</v-button>
        <v-button :loading="true">loading</v-button>
        <v-button :loading="variate" icon="setting" @click="variate = !variate">点击按钮切换状态</v-button>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>按钮可以设置 <code>icon</code>。
                <br/><br/>
               可接收一个<code>loading</code>属性，当值为 <code>true</code>时，会显示成loading icon。
                <br/><br/>
               当 <code>loading</code>属性和<code>icon</code>属性同时存在时，优先判断 <code>loading</code>，当loading为false时，再显示icon属性指定的图标。
            </p>
        </div>

        <h2>button组</h2>
        <p>
            <strong>预览</strong>
        </p>
        <v-button-group>
            <v-button icon="left">上一页</v-button>
            <v-button>更多</v-button>
            <v-button icon="right" icon-position="right">下一页</v-button>
        </v-button-group>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{groupContent}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
               将多个 <code>v-button</code>放入 <code>v-button-group</code>内，可实现按钮组合的效果。
            </p>
        </div>

        <h2>API</h2>
        <p>
            <strong>v-button props</strong>
        </p>
        <table>
            <thead>
            <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>icon</td>
                <td>按钮图标。可选值为 <code>setting</code>，<code>error</code>，<code>info</code>，<code>right</code>，<code>left</code>，
                <code>down</code>，<code>download</code>，<code>thumb-up</code></td>
                <td>String</td>
                <td>-</td>
            </tr>
            <tr>
                <td>loading</td>
                <td>优先级比icon属性高，值只能是布尔类型。可选值为 <code>true</code>，<code>false</code>。当值为true时，按钮会增加loading icon，当值为false时，不显示loading icon，如果
                用户设置了icon属性，则会显示icon属性设置的图标类型</td>
                <td>Boolean</td>
                <td>-</td>
            </tr>
            <tr>
                <td>icon-position</td>
                <td>设置icon位于button中的位置。可选值为 <code>left</code>， <code>right</code></td>
                <td>String</td>
                <td>left</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import Button from '../../../src/components/button/button'
    import ButtonGroup from '../../../src/components/button/button-group'

    //代码高亮
    import hljs from "highlight.js"
    import "highlight.js/styles/atom-one-dark-reasonable.css"
    hljs.highlightCode = function () {
        let blocks = document.querySelectorAll("pre code");
        [].forEach.call(blocks, hljs.highlightBlock);
    };

    export default {
        components: {
            'v-button': Button,
            'v-button-group': ButtonGroup
        },
        mounted () {
            hljs.highlightCode()
        },
        data () {
            return {
                variate: false,
                content: `
<v-button>默认按钮</v-button>
<v-button icon="setting">设置按钮</v-button>
<v-button :loading="true">loading</v-button>
<v-button :loading="variate" icon="setting" @click="variate=!variate">点击切换状态</v-button>

data: {
  variate: false
}
                `,
                groupContent: `
<v-button-group>
    <v-button icon="left">上一页</v-button>
    <v-button>更多</v-button>
    <v-button icon="right" icon-position="right">下一页</v-button>
</v-button-group>
                `.trim()
            }
        }
    }
</script>

<style lang="scss" scoped>
    //引入共用scss
    @import "common";
</style>