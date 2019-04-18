<template>
    <div>
        <h2>布局</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-layout style="color: white; margin-bottom:50px;">
            <v-header style="height: 50px; background:lightskyblue;">
                header
            </v-header>
            <v-content style="height: 100px; background:deepskyblue;">
                content
            </v-content>
            <v-footer style="height: 50px; background:lightskyblue;">
                footer
            </v-footer>
        </v-layout>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                <code>v-layout</code> 布局容器。可嵌套 <code>v-header / v-content / v-footer / v-sider</code>
            </p>
            <p>
                <code>v-header</code> 顶部组件。
            </p>
            <p>
                <code>v-content</code> 内容部分。
            </p>
            <p>
                <code>v-footer</code> 底部组件。
            </p>
            <p>
                <code>v-sider</code> 侧边栏。
            </p>
        </div>

        <h2>布局</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <v-header style="height: 50px; background:lightskyblue;">
                header
            </v-header>
            <v-layout>
                <v-sider style="background:#7cbce9; width:200px; color: #fff;">
                    sider
                </v-sider>
                <v-content style="height: 100px; background:deepskyblue;">
                    content
                </v-content>
            </v-layout>
            <v-footer style="height: 50px; background:lightskyblue;">
                footer
            </v-footer>
        </v-layout>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content2}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                <code>v-sider</code> 自带 <code>close功能</code>，点击上面的 <code>X</code> sider 将向左滑动关闭。
            </p>
        </div>

        <h2>布局</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <v-sider :close-button='false' style="background:#7cbce9; width:200px; color: #fff;">
                sider
            </v-sider>
            <v-layout>
                <v-header style="height: 50px; background:lightskyblue;">
                    header
                </v-header>
                <v-content style="height: 100px; background:deepskyblue;">
                    content
                </v-content>
                <v-footer style="height: 50px; background:lightskyblue;">
                    footer
                </v-footer>
            </v-layout>
        </v-layout>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content3}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                如果 <code>v-sider</code> 不需要 close功能，传入 <code>closeButton</code> 属性为 <code>false</code>。
            </p>
        </div>

        <h2>API</h2>
        <p>
            <strong>v-sider props</strong>
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
                <td>closeButton</td>
                <td>该sider是否需要为用户提供手动关闭功能</td>
                <td>Boolean</td>
                <td>true</td>
            </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
    import Content from '../../../src/components/layout/content'
    import Footer from '../../../src/components/layout/footer'
    import Header from '../../../src/components/layout/header'
    import Layout from '../../../src/components/layout/layout'
    import Sider from '../../../src/components/layout/sider'

    //代码高亮
    import hljs from "highlight.js"
    import "highlight.js/styles/atom-one-dark-reasonable.css"
    hljs.highlightCode = function () {
        let blocks = document.querySelectorAll("pre code");
        [].forEach.call(blocks, hljs.highlightBlock);
    };

    export default {
        components: {
            'v-content': Content,
            'v-footer': Footer,
            'v-header': Header,
            'v-layout': Layout,
            'v-sider': Sider
        },
        mounted () {
            hljs.highlightCode()
        },
        data() {
            return {
                content2: `
<v-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <v-header style="height: 50px; background:lightskyblue;">
        header
    </v-header>
    <v-layout>
        <v-sider style="background:#7cbce9; width:200px; color: #fff;">
            sider
        </v-sider>
        <v-content style="height: 100px; background:deepskyblue;">
            content
        </v-content>
    </v-layout>
    <v-footer style="height: 50px; background:lightskyblue;">
        footer
    </v-footer>
</v-layout>
                `.trim(),
                content: `
<v-layout>
    <v-header>header</v-header>
    <v-content>content</v-content>
    <v-footer>footer</v-footer>
</v-layout>
                `.trim(),
                content3: `
<v-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <v-sider :close-button='false' style="background:#7cbce9; width:200px; color: #fff;">
        sider
    </v-sider>
    <v-layout>
        <v-header style="height: 50px; background:lightskyblue;">
            header
        </v-header>
        <v-content style="height: 100px; background:deepskyblue;">
            content
        </v-content>
        <v-footer style="height: 50px; background:lightskyblue;">
            footer
        </v-footer>
    </v-layout>
</v-layout>
                `.trim()
            }
        }
    }
</script>

<style lang="scss" scoped>
    //引入共用scss
    @import "common";
</style>
