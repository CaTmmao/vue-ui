---
title: 快速上手
---
## 特别提醒
使用该框架时，您需要使用**border-box**盒模型，否则会影响样式。**CSS**代码示例：
```css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

## 引入全部组件
```javascript
//main.js
import catmmao from 'catmmao-vue-ui'
import 'catmmao-vue-ui/dist/index.css'
Vue.use(catmmao)
```

## 按需引入部分组件
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
