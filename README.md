[![Build Status](https://travis-ci.org/CaTmmao/vue-ui.svg?branch=master)](https://travis-ci.org/CaTmmao/vue-ui)
<img src="https://img.shields.io/github/license/catmmao/vue-ui.svg">
<img src="https://img.shields.io/bundlephobia/min/catmmao-vue-ui.svg">
<img src="https://img.shields.io/npm/v/catmmao-vue-ui.svg">
<img src="https://img.shields.io/github/last-commit/catmmao/vue-ui.svg">

### [catmmao-vue-ui 官网](https://catmmao.github.io/vue-ui/)

# catmmao-vue-ui

- 该框架主要目的用于熟悉 Vue，代码尚未完全完工,请不要在生产环境中使用本 UI 框架。
- 本 UI 框架是基于 Vue 2 实现的。
- 已发布到npm，可使用 npm / yarn 安装到项目中使用

## 开始使用
1.添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```css
*,*::before,*::after {
    box-sizing: border-box;
    }
```

2.安装 catmmao-vue-ui
```
// 从npm5开始，会自动添加 -S （--save 缩写，会被添加到package.json中），如果是npm5以下版本，请自行添加 -S
npm i -S catmmao-vue-ui

yarn add catmmao-vue-ui
```

3.引入
- 引入全部组件
```javascript
//main.js
import catmmao from 'catmmao-vue-ui'
import 'catmmao-vue-ui/dist/index.css'
Vue.use(catmmao)
```

- 按需引入
```javascript
//main.js

import Vue from 'vue'

//只引入该框架的Button组件
import {Button} from 'catmmao-vue-ui'
import 'catmmao-vue-ui/dist/index.css'

new Vue({
  el: "#app",
  components: {
    //Button组件将以自定义标签 v-button 使用 
    "v-button": Button
  }
})
```

