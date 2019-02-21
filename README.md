# 一个 Vue UI 组件
[![Build Status](https://travis-ci.org/CaTmmao/vue-ui.svg?branch=master)](https://travis-ci.org/CaTmmao/vue-ui)
<img src="https://img.shields.io/github/license/catmmao/vue-ui.svg">
<img src="https://img.shields.io/bundlephobia/min/catmmao-test-aaaaa.svg">
<img src="https://img.shields.io/github/issues/catmmao/vue-ui.svg">
<img src="https://img.shields.io/github/issues-closed/catmmao/vue-ui.svg">
<img src="https://img.shields.io/npm/v/catmmao-test-aaaaa.svg">
<img src="https://img.shields.io/github/last-commit/catmmao/vue-ui.svg">

## 介绍
这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用

## 开始使用
1.添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```css
*,
*::before,
*::after {
    box-sizing: border-box;
    }
```

2.安装 catmmao-vue-ui
```
// 从npm5开始，会自动添加 -S （--save 缩写，会被添加到package.json中），如果是npm5以下版本，请自行添加 -S
npm i -S catmmao-vue-ui
```

3.引入
```vue
 //引入里面的 button 组件
 import {Button} from 'catmmao-vue-ui'
 
 //引入 css 文件
 import '../node_modules/catmmao-vue-ui/dist/index.css'

    //注册 button 组件
    export default {
        components: {
            'v-button': Button
        }
    }
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码