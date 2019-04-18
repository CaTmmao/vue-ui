<template>
    <div>
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-popover>
            <template slot="content">
                弹出内容
            </template>
            <v-button>上方弹出</v-button>
        </v-popover>

        <v-popover position="bottom">
            <template slot="content">
                弹出内容
            </template>
            <v-button>下方弹出</v-button>
        </v-popover>

        <v-popover position="left">
            <template slot="content">
                弹出内容
            </template>
            <v-button>左侧弹出</v-button>
        </v-popover>

        <v-popover position="right">
            <template slot="content">
                弹出内容
            </template>
            <v-button>右侧弹出</v-button>
        </v-popover>

        <p class="code">
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                所有内容用 <code>v-popover</code> 标签包裹起来。
            </p>
            <p>
                想要弹出的内容写在 <code>template</code> 标签内，记得添加 <code>slot</code> 注明是 <code>content</code>。<br/>
                另外一个不用额外注明slot名字的将作为默认的slot，用来作为触发弹出popover的元素，如上面例子中的 <code>v-button。</code>
            </p>
            <p>
                <code>v-popover</code> 标签接受 <code>position</code> 属性，用来指定弹出内容相对于button的位置。
            </p>
            <p>
                默认 <code>click</code> 事件触发显示popover。
            </p>
        </div>

        <h2>将触发方式改为hover</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-popover trigger="hover">
            <template slot="content">
                弹出内容
            </template>
            <v-button>上方弹出</v-button>
        </v-popover>

        <v-popover position="bottom" trigger="hover">
            <template slot="content">
                弹出内容
            </template>
            <v-button>下方弹出</v-button>
        </v-popover>

        <v-popover position="left" trigger="hover">
            <template slot="content">
                弹出内容
            </template>
            <v-button>左侧弹出</v-button>
        </v-popover>

        <v-popover position="right" trigger="hover">
            <template slot="content">
                弹出内容
            </template>
            <v-button>右侧弹出</v-button>
        </v-popover>

        <p class="code">
            <strong>代码</strong>
        </p>
        <pre><code>{{content2}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                <code>v-popover</code> 接受 <code>trigger</code> 属性，可以将触发popover的方式从 <code>click</code> 改为 <code>hover</code>。
            </p>
        </div>

        <h2>API</h2>
        <p>
            <strong>v-popover props</strong>
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
                <td>position</td>
                <td>设置popover弹出内容的位置。可选值为 <code>top</code>，<code>bottom</code>，<code>left</code>，<code>right</code></td>
                <td>String</td>
                <td>top</td>
            </tr>
            <tr>
                <td>trigger</td>
                <td>触发popover的方式，可选值为 <code>click</code>，<code>hover</code></td>
                <td>String</td>
                <td>click</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Popover from '../../../src/components/popover/popover'
    import Button from '../../../src/components/button/button'

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
            'v-popover': Popover
        },
        mounted () {
            hljs.highlightCode()
        },
        data() {
            return {
                content2: `
<v-popover trigger="hover">
    <template slot="content">
        弹出内容
    </template>
    <v-button>上方弹出</v-button>
</v-popover>

<v-popover position="bottom" trigger="hover">
    <template slot="content">
        弹出内容
    </template>
    <v-button>下方弹出</v-button>
</v-popover>

<v-popover position="left" trigger="hover">
    <template slot="content">
        弹出内容
    </template>
    <v-button>左侧弹出</v-button>
</v-popover>

<v-popover position="right" trigger="hover">
    <template slot="content">
        弹出内容
    </template>
    <v-button>右侧弹出</v-button>
</v-popover>
                `.trim(),
                content: `
<v-popover>
    <template slot="content">
        弹出内容
    </template>
    <v-button>上方弹出</v-button>
</v-popover>

<v-popover position="bottom">
    <template slot="content">
        弹出内容
    </template>
    <v-button>下方弹出</v-button>
</v-popover>

<v-popover position="left">
    <template slot="content">
        弹出内容
    </template>
    <v-button>左侧弹出</v-button>
</v-popover>

<v-popover position="right">
    <template slot="content">
        弹出内容
    </template>
    <v-button>右侧弹出</v-button>
</v-popover>
                `.trim()
            }
        }
    }
</script>

<style lang="scss" scoped>
    //引入共用scss
    @import "common";

    .code {
        margin-top: 40px;
    }
</style>
