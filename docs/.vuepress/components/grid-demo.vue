<template>
    <div>
        <h2>24格网格</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-row class="demoRow">
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
        </v-row>
        <v-row class="demoRow">
            <v-col span="6">
                <div class="demoCol">6</div>
            </v-col>
            <v-col span="6">
                <div class="demoCol">6</div>
            </v-col>
            <v-col span="6">
                <div class="demoCol">6</div>
            </v-col>
            <v-col span="6">
                <div class="demoCol">6</div>
            </v-col>
        </v-row>
        <v-row class="demoRow">
            <v-col span="4">
                <div class="demoCol">4</div>
            </v-col>
            <v-col span="4">
                <div class="demoCol">4</div>
            </v-col>
            <v-col span="4">
                <div class="demoCol">4</div>
            </v-col>
            <v-col span="4">
                <div class="demoCol">4</div>
            </v-col>
            <v-col span="4">
                <div class="demoCol">4</div>
            </v-col>
            <v-col span="4">
                <div class="demoCol">4</div>
            </v-col>
        </v-row>
        <v-row class="demoRow">
            <v-col span="2">
                <div class="demoCol">2</div>
            </v-col>
            <v-col span="2">
                <div class="demoCol">2</div>
            </v-col>
            <v-col span="2">
                <div class="demoCol">2</div>
            </v-col>
            <v-col span="2">
                <div class="demoCol">2</div>
            </v-col>
            <v-col span="2">
                <div class="demoCol">2</div>
            </v-col>
            <v-col span="2">
                <div class="demoCol">2</div>
            </v-col>
            <v-col span="2">
                <div class="demoCol">2</div>
            </v-col>
            <v-col span="2">
                <div class="demoCol">2</div>
            </v-col>
            <v-col span="2">
                <div class="demoCol">2</div>
            </v-col>
            <v-col span="2">
                <div class="demoCol">2</div>
            </v-col>
            <v-col span="2">
                <div class="demoCol">2</div>
            </v-col>
            <v-col span="2">
                <div class="demoCol">2</div>
            </v-col>
        </v-row>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                <code>v-row</code> 标签为一行，<code>v-col</code> 标签为单个单元格。
            </p>
            <p>该网格系统每行可分为 <code>24</code> 份，在 <code>v-col</code> 标签上添加 <code>span</code>
            属性控制每个单元格所占的份数为 <code>X</code> 份。</p>
            <p>网格的样式自行添加，如上面的例子中，在 <code>v-col</code> 标签内
            添加了一个div元素，在此div元素上设置自己想要的样式。</p>
        </div>

        <h2>设置gutter</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-row class="demoRow" gutter="10">
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
        </v-row>
        <v-row class="demoRow" gutter="10">
            <v-col span="6">
                <div class="demoCol">6</div>
            </v-col>
            <v-col span="6">
                <div class="demoCol">6</div>
            </v-col>
            <v-col span="6">
                <div class="demoCol">6</div>
            </v-col>
            <v-col span="6">
                <div class="demoCol">6</div>
            </v-col>
        </v-row>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content2}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                <code>v-row</code> 标签可添加 <code>gutter</code> 属性，使每个网格都有间隔，并且间隔宽度一致。
            </p>
        </div>

        <h2>设置空隙</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-row class="demoRow">
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
            <v-col span="6" offset="2">
                <div class="demoCol">6</div>
            </v-col>
            <v-col span="2" offset="6">
                <div class="demoCol">2</div>
            </v-col>
        </v-row>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content3}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                <code>v-col</code> 标签添加 <code>offset</code> 属性后，会在该列 <code>左侧</code> 添加空隙，值为
                <code>Number / String</code> 类型。
            </p>
            <p>
                <code>offset</code> 和 <code>span</code> 一样都是按照份数会自动调整自己的宽度，因此
                <code>offset</code> 和 <code>span</code> 相加起来最多不超过 <code>24</code> 份。
            </p>
        </div>

        <h2>对齐方式</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-row class="demoRow">
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
        </v-row>
        <v-row class="demoRow" align="center">
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
        </v-row>
        <v-row class="demoRow" align="right">
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
            <v-col span="8">
                <div class="demoCol">8</div>
            </v-col>
        </v-row>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content4}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                <code>v-row</code> 标签接受 <code>align</code> 属性，用来设置该行单元格的对齐方式，原理是给 <code>v-row</code>
                元素添加了 <code>display: flex;</code> css属性，传入的 <code>align</code> 属性将作为 <code>justify-content</code> 的值。
            </p>
        </div>

        <h2>响应式</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-row class="demoRow">
            <v-col span="20" :ipad="{span: 12}" :pc="{span: 2}">
                <div class="demoCol">8</div>
            </v-col>
            <v-col span="4" :ipad="{span: 12}" :pc="{span: 22}">
                <div class="demoCol">8</div>
            </v-col>
        </v-row>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content5}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>
                该网格系统支持响应式。如果要设置响应式的网格，需要在 <code>v-col</code> 标签内添加代表各个设备的属性，
                可选值为 <code>ipad</code>，<code>narrow-pc</code>，<code>pc</code>，<code>wide-pc</code>，
                如果直接传入 <code>offset / span</code> 属性，将默认为 <code>移动端样式</code>，如果需要为其他设备单独设置，则需要额外添加其他属性。
            </p>
            <p>各个属性所对应的px请查看最下方的API内容。</p>
        </div>

        <h2>API</h2>
        <p>
            <strong>v-row props</strong>
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
                <td>gutter</td>
                <td>网格间距</td>
                <td>String / Number</td>
                <td>-</td>
            </tr>
            <tr>
                <td>align</td>
                <td>flex布局下的水平排列方式，可选值为 <code>left</code>，<code>right</code>，<code>center</code></td>
                <td>String</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>

        <p>
            <strong>v-col props</strong>
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
                <td>span</td>
                <td>单个网格的占位格数，可选值为 <code>0~24</code>，为 0 时，相当于 <code>display: none</code></td>
                <td>String / Number</td>
                <td>-</td>
            </tr>
            <tr>
                <td>offset</td>
                <td>该网格的左侧间隔格数，和 <code>span</code> 属性一样，可选值为 <code>0~24</code>，确保 <code>span + offset</code> 最多不超过24格</td>
                <td>String / Number</td>
                <td>-</td>
            </tr>
            <tr>
                <td>ipad</td>
                <td><code>≥576px</code> 响应式网格，可在 <code>ipad</code> 属性中添加 <code>span / offset</code>属性</td>
                <td>Object</td>
                <td>-</td>
            </tr>
            <tr>
                <td>narrow-pc</td>
                <td><code>≥768px</code> 响应式网格，可在 <code>narrow-pc</code> 属性中添加 <code>span / offset</code>属性</td>
                <td>Object</td>
                <td>-</td>
            </tr>
            <tr>
                <td>pc</td>
                <td><code>≥992px</code> 响应式网格，可在 <code>pc</code> 属性中添加 <code>span / offset</code>属性</td>
                <td>Object</td>
                <td>-</td>
            </tr>
            <tr>
                <td>wide-pc</td>
                <td><code>≥1200px</code> 响应式网格，可在 <code>wide-pc</code> 属性中添加 <code>span / offset</code>属性</td>
                <td>Object</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import Col from '../../../src/components/grid/col'
    import Row from '../../../src/components/grid/row'

    //代码高亮
    import hljs from "highlight.js"
    import "highlight.js/styles/atom-one-dark-reasonable.css"
    hljs.highlightCode = function () {
        let blocks = document.querySelectorAll("pre code");
        [].forEach.call(blocks, hljs.highlightBlock);
    };

    export default {
        components: {
            'v-col': Col,
            'v-row': Row
        },
        mounted () {
            hljs.highlightCode()
        },
        data () {
            return {
                content5: `
<v-row class="demoRow">
    <v-col span="20" :ipad="{span: 12}" :pc="{span: 2}">
        <div class="demoCol">8</div>
    </v-col>
    <v-col span="4" :ipad="{span: 12}" :pc="{span: 22}">
        <div class="demoCol">8</div>
    </v-col>
</v-row>
                `.trim(),
                content4: `
<v-row class="demoRow">
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
</v-row>
<v-row class="demoRow" align="center">
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
</v-row>
<v-row class="demoRow" align="right">
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
</v-row>
                `.trim(),
                content3: `
<v-row class="demoRow">
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
    <v-col span="6" offset="2">
        <div class="demoCol">6</div>
    </v-col>
    <v-col span="2" offset="6">
        <div class="demoCol">2</div>
    </v-col>
</v-row>
                `.trim(),
                content2: `
<v-row class="demoRow" gutter="10">
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
</v-row>
<v-row class="demoRow" gutter="10">
    <v-col span="6">
        <div class="demoCol">6</div>
    </v-col>
    <v-col span="6">
        <div class="demoCol">6</div>
    </v-col>
    <v-col span="6">
        <div class="demoCol">6</div>
    </v-col>
    <v-col span="6">
        <div class="demoCol">6</div>
    </v-col>
</v-row>
                `.trim(),
                content: `
.demoRow {
    margin: 10px 0;
}

.demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}

<v-row class="demoRow">
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
    <v-col span="8">
        <div class="demoCol">8</div>
    </v-col>
</v-row>

<v-row class="demoRow">
    <v-col span="6">
        <div class="demoCol">6</div>
    </v-col>
    <v-col span="6">
        <div class="demoCol">6</div>
    </v-col>
    <v-col span="6">
        <div class="demoCol">6</div>
    </v-col>
    <v-col span="6">
        <div class="demoCol">6</div>
    </v-col>
</v-row>

<v-row class="demoRow">
    <v-col span="4">
        <div class="demoCol">4</div>
    </v-col>
    <v-col span="4">
        <div class="demoCol">4</div>
    </v-col>
    <v-col span="4">
        <div class="demoCol">4</div>
    </v-col>
    <v-col span="4">
        <div class="demoCol">4</div>
    </v-col>
    <v-col span="4">
        <div class="demoCol">4</div>
    </v-col>
    <v-col span="4">
        <div class="demoCol">4</div>
    </v-col>
</v-row>

<v-row class="demoRow">
    <v-col span="2">
        <div class="demoCol">2</div>
    </v-col>
    <v-col span="2">
        <div class="demoCol">2</div>
    </v-col>
    <v-col span="2">
        <div class="demoCol">2</div>
    </v-col>
    <v-col span="2">
        <div class="demoCol">2</div>
    </v-col>
    <v-col span="2">
        <div class="demoCol">2</div>
    </v-col>
    <v-col span="2">
        <div class="demoCol">2</div>
    </v-col>
    <v-col span="2">
        <div class="demoCol">2</div>
    </v-col>
    <v-col span="2">
        <div class="demoCol">2</div>
    </v-col>
    <v-col span="2">
        <div class="demoCol">2</div>
    </v-col>
    <v-col span="2">
        <div class="demoCol">2</div>
    </v-col>
    <v-col span="2">
        <div class="demoCol">2</div>
    </v-col>
    <v-col span="2">
        <div class="demoCol">2</div>
    </v-col>
</v-row>
                `.trim()
            }
        }
    }
</script>

<style lang="scss" scoped>
    //引入共用scss
    @import "common";

    .demoRow {
        margin: 10px 0;
    }

    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
