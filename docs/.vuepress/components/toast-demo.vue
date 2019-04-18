<template>
    <div>
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-button @click="$toast('点击弹出提示')">上方弹出</v-button>
        <v-button @click="$toast('点击弹出提示', {position:'middle'})">上方弹出</v-button>
        <v-button @click="$toast('点击弹出提示', {position:'bottom'})">上方弹出</v-button>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                toast组件接受 <code>position</code> 属性，设置弹出的方向，默认为 <code>top</code>
            </p>
            <p>
                toast有个自动关闭时间，默认为3秒，如果想要自定义关闭延迟时间，在上面的 <code>position</code>
                属性后面添加一个 <code>autoCloseDelay</code> 属性，值为数字，延迟1秒则值为1。
            </p>
        </div>

        <h2>设置关闭按钮</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-button @click="onClickButton">上方弹出</v-button>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content2}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                <code>closeButton</code> 属性是一个对象，接受 <code>text</code> 和 <code>callback</code> 两个参数。<br/>
                <code>text</code> 是关闭按钮的内容， <code>callback</code> 是当按钮关闭后需要执行的回调函数。
            </p>
        </div>

        <h2>支持HTML</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-button @click="supportHTML">上方弹出</v-button>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content3}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                设置 <code>enableHTML</code> 属性为 <code>true</code>，toast弹出的内容将以 HTML 形式渲染。
            </p>
        </div>

        <h2>API</h2>
        <p>
            <strong>toast props</strong>
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
                <td>toast显示的位置。可选值为 <code>top</code>，<code>left</code>，<code>right</code></td>
                <td>String</td>
                <td>top</td>
            </tr>
            <tr>
                <td>autoClose</td>
                <td>是否自动关闭。可选值为 <code>true</code>，<code>false</code></td>
                <td>Boolean</td>
                <td>true</td>
            </tr>
            <tr>
                <td>autoCloseDelay</td>
                <td>自动关闭的延迟时间。如果想延迟 4 秒后关闭，就设值为 <code>4</code></td>
                <td>Number</td>
                <td>3</td>
            </tr>
            <tr>
                <td>closeButton</td>
                <td>关闭按钮。可增加参数 <code>text</code>，<code>callback</code>。<br/>
                <code>text</code> 作为关闭按钮的文字。<code>callback</code>是按钮关闭后调用的回调函数。</td>
                <td>Object</td>
                <td>-</td>
            </tr>
            <tr>
                <td>enableHTML</td>
                <td>使toast弹出的内容以HTML方式渲染</td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Button from '../../../src/components/button/button'
    import Plugin from '../../../src/components/plugin'
    import Vue from 'vue'

    //通过Vue.use执行plugin里的install方法
    Vue.use(Plugin)


    //代码高亮
    import hljs from "highlight.js"
    import "highlight.js/styles/atom-one-dark-reasonable.css"
    hljs.highlightCode = function () {
        let blocks = document.querySelectorAll("pre code");
        [].forEach.call(blocks, hljs.highlightBlock);
    };

    export default {
        components: {
            'v-button': Button
        },
        mounted () {
            hljs.highlightCode()
        },
        methods: {
            onClickButton() {
                /* 用户使用时通过this.$toast使用 第一个参数是message，代表需要弹出的内容，第二个参数是一个对象，
                 可在对象中的传入的属性是其他所有toast props可接收的参数，如 enableHTML,closeButton等*/
                this.$toast('手动关闭按钮', {
                    closeButton: {
                        text: 'close',
                        callback: () => {
                            console.log('啦啦啦啦')
                        }
                    }
                })
            },
            supportHTML() {
                this.$toast(`<strong style="color: yellowgreen">支持HTML</strong>`, {
                    enableHTML: true
                })
            }
        },
        data() {
            return {
                content3: `
<v-button @click="supportHTML">上方弹出</v-button>

methods: {
    supportHTML() {
        this.$toast(\`<strong style="color: yellowgreen">支持HTML</strong>\`, {
        enableHTML: true
        })
    }
}
                `.trim(),
                content: `
<v-button @click="$toast('点击弹出提示')">上方弹出</v-button>
<v-button @click="$toast('点击弹出提示', {position:'middle'})">上方弹出</v-button>
<v-button @click="$toast('点击弹出提示', {position:'bottom'})">上方弹出</v-button>
                `.trim(),
                content2: `
<v-button @click="onClickButton">上方弹出</v-button>

methods: {
    onClickButton() {
        /* 用户使用时通过this.$toast使用 第一个参数是message，代表需要弹出的内容，第二个参数是一个对象，
         可在对象中的传入的属性是其他所有toast props可接收的参数，如 enableHTML,closeButton等*/
        this.$toast('手动关闭按钮', {
            closeButton: {
                text: 'close',
                callback: () => {
                    console.log('啦啦啦啦')
                }
            }
        })
    }
}
                `.trim()
            }
        }
    }
</script>

<style lang="scss" scoped>
    //引入共用scss
    @import "common";
</style>
