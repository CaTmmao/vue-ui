<template>
    <div>
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-tabs :selected.sync="selectedTab">
            <!-- 上面加了 .sync 修饰符后，等价于下面这行，.sync是一个语法糖
            当用户点击里面其中一个tab后，就会触发 update:selected事件
            <v-tabs selected="selectedTab" @update:selected="selectedTab = $event">-->
            <v-tabs-head>
                <v-tabs-item name="1">tab1</v-tabs-item>
                <v-tabs-item name="2">tab2</v-tabs-item>
            </v-tabs-head>
            <v-tabs-body>
                <v-tabs-pane name="1">content1</v-tabs-pane>
                <v-tabs-pane name="2">content2</v-tabs-pane>
            </v-tabs-body>
        </v-tabs>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>

            <code>v-tabs</code>
            包裹整个tabs的元素。
            <br/>
            <code>v-tabs-head</code>
            包裹整个上部分tabs。
            <br/>
            <code>v-tabs-item</code>
            单个tab。
            <br/>
            <code>v-tabs-body</code>
            包裹整个tab内容。
            <br/>
            <code>v-tabs-pane</code>
            单个tab的内容。
            <br/>
            <br/>
            每个 <code>v-tabs-item</code> 和 <code>v-tabs-pane</code> 都有自己的 <code>name</code> 属性，用来匹配哪个item和pane是相
            匹配的，因此在 <code>v-tabs-head</code> 和 <code>v-tabs-body</code> 标签中他们的顺序是不重要的，使 item 和 pane 匹配
            在一起的是他们的 name 属性。
            <br/>
            <br/>
            <code>v-tabs</code> 标签上的 <code>selected</code>属性为默认选中的tab项。如：tab1的name是字符串1，设置tabs
            默认的选中项为tab1时，将tab1的name属性的值，也就是字符串1作为selected的值，那么该tabs
            当前默认选中项则是tab1。
            <br/>
        </div>

        <h2>可设置</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-tabs selected="1">
            <v-tabs-head>
                <v-tabs-item name="1">tab1</v-tabs-item>
                <v-tabs-item name="2" disabled>tab2</v-tabs-item>
            </v-tabs-head>
            <v-tabs-body>
                <v-tabs-pane name="1">content1</v-tabs-pane>
                <v-tabs-pane name="2">content2</v-tabs-pane>
            </v-tabs-body>
        </v-tabs>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content2}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <code>v-tabs-item</code> 接收 <code>disabled</code> 标签，
            使该tab不可用
        </div>

        <h2>API</h2>
        <p>
            <strong>v-tabs props</strong>
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
                <td>selected</td>
                <td>当前被选中的tab</td>
                <td>String</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>
        <p>
            <strong>v-tabs-item props</strong>
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
                <td>name</td>
                <td>用来匹配 <code>item</code> 和 <code>pane</code></td> <td>String</td>
                <td>-</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>代表是否禁用该tab。可选值为 <code>true</code>，<code>false</code></td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            </tbody>
        </table>
        <p>
            <strong>v-tabs-pane props</strong>
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
                <td>name</td>
                <td>用来匹配 <code>item</code> 和 <code>pane</code></td> <td>String</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Tabs from '../../../src/components/tabs/tabs'
    import TabsBody from '../../../src/components/tabs/tabs-body'
    import TabsHead from '../../../src/components/tabs/tabs-head'
    import TabsItem from '../../../src/components/tabs/tabs-item'
    import TabsPane from '../../../src/components/tabs/tabs-pane'
    import Icon from '../../../src/components/button/icon'

    //代码高亮
    import hljs from "highlight.js"
    import "highlight.js/styles/atom-one-dark-reasonable.css"
    hljs.highlightCode = function () {
        let blocks = document.querySelectorAll("pre code");
        [].forEach.call(blocks, hljs.highlightBlock);
    };

    export default {
        components: {
            'v-tabs': Tabs,
            'v-tabs-body': TabsBody,
            'v-tabs-head': TabsHead,
            'v-tabs-item': TabsItem,
            'v-icon': Icon,
            'v-tabs-pane': TabsPane
        },
        mounted () {
            hljs.highlightCode()
        },
        data () {
            return {
                selectedTab: '1',
                content: `
<v-tabs selected="1">
    <v-tabs-head>
        <v-tabs-item name="1">tab1</v-tabs-item>
        <v-tabs-item name="2">tab2</v-tabs-item>
    </v-tabs-head>
    <v-tabs-body>
        <v-tabs-pane name="1">content1</v-tabs-pane>
        <v-tabs-pane name="2">content2</v-tabs-pane>
    </v-tabs-body>
</v-tabs>

`.trim(),
                content2: `
<v-tabs selected="1">
    <v-tabs-head>
        <v-tabs-item name="1">tab1</v-tabs-item>
        <v-tabs-item name="2" disabled>tab2</v-tabs-item>
    </v-tabs-head>
    <v-tabs-body>
        <v-tabs-pane name="1">content1</v-tabs-pane>
        <v-tabs-pane name="2">content2</v-tabs-pane>
    </v-tabs-body>
</v-tabs>
                `.trim()
            }
        }
    }
</script>

<style lang="scss" scoped>
    //引入共用scss
    @import "common";
</style>
