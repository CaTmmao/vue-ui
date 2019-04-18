import {
    Button, ButtonGroup, Collapse, CollapseItem, Col, Row, Input, Content, Footer,
    Header, Layout, Sider, Tabs, TabsBody, TabsHead, TabsItem, TabsPane, Toast, Plugin
} from './src/component'

const components = [Button, ButtonGroup, Collapse, CollapseItem, Col, Row, Input, Content, Footer,
    Header, Layout, Sider, Tabs, TabsBody, TabsHead, TabsItem, TabsPane, Toast]

const install = Vue => {
    components.forEach(component => {
        component.install(Vue)
    })
    Vue.use(Plugin)
}

export {
    Button, ButtonGroup, Collapse, CollapseItem, Col, Row, Input, Content, Footer,
    Header, Layout, Sider, Tabs, TabsBody, TabsHead, TabsItem, TabsPane, Toast, Plugin
}

export default {install, Plugin}
