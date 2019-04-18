<template>
    <div>
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-input content="中文"></v-input>
        <v-input content="中文" disabled></v-input>
        <v-input content="中文" readonly></v-input>
        <v-input content="error状态" error="举例这是error状态"></v-input>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>

        <div class="explain">
            <header class="explain-header">
                <p class="explain-title">说明</p>
            </header>
            <p>vue的自定义标签不能写成自闭合。</p>
            <p>
                input组件接收 <code>content</code> 属性，该属性的值会被作为input的value值渲染到input框内。
            </p>
            <p>
                <code>disabled</code> 属性将会使input为不可用状态。
            </p>
            <p>
                <code>readonly</code> 属性使input为只读。
            </p>
            <p>
                在 <code>error</code> 属性内添加文字，该input框会变成error状态，并且自动添加一个error图标。
            </p>
        </div>

        <h2>双向绑定</h2>
        <p>
            <strong>预览</strong>
        </p>

        <v-input v-model="value" content="1"></v-input>
        <div>
            value: {{value}}
        </div>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content2}}</code></pre>

        <h2>API</h2>
        <p>
            <strong>v-input props</strong>
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
                <td>content</td>
                <td>作为input的 <code>value</code> 值渲染在input框内</td>
                <td>String</td>
                <td>-</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>禁用状态。可选项为 <code>true</code>，<code>false</code></td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>readonly</td>
                <td>只读状态。可选项为 <code>true</code>，<code>false</code></td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>error</td>
                <td>如果想将input设置为error状态，添加 <code>error</code> 属性，error属性的值将会显示在input框右侧</td>
                <td>String</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Input from '../../../src/components/input/input'

    export default {
        components: {
            'v-input': Input
        },
        data () {
            return {
                value: '1',
                content: `
<v-input content="中文"></v-input>
<v-input content="中文" disabled></v-input>
<v-input content="中文" readonly></v-input>
<v-input content="error状态" error="举例这是error状态"></v-input>
               `.trim(),
                content2: `
<v-input v-model="value" content="1"></v-input>
<div>
    value: {{value}}
</div>

data: {
    value: '1'
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