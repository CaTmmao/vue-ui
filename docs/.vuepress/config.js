module.exports = {
    title: 'catmmao-ui',
    description: '一个用于学习vue的UI框架',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./logo.png` }]
    ],
    themeConfig: {
        logo: "./index.png",
        repo: "CaTmmao/vue-ui", // 添加 github 链接
        sidebar: [
            //如果是文件夹需要在文件名后面添加一个/
            {
                title: "入门",
                collapsable: false,
                children: [
                    ["/install/", "安装"],
                    ["/get-started/", "快速上手"]
                ]
            },
            {
                title: "组件",
                collapsable: false,
                children: [
                    ["/components/layout", "layout"],
                    ["/components/grid", "grid"],
                    ["/components/tabs", "tabs"],
                    ["/components/toast", "toast"],
                    ["/components/popover", "popover"],
                    ["/components/button", "button"],
                    ["/components/input", "input"]
                    // ["/components/collapse", "collapse"],
                ]
            }
        ]
    }
}