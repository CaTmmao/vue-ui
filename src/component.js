import Button from './components/button/button'
import ButtonGroup from './components/button/button-group'
import Collapse from  './components/collapse/collapse'
import CollapseItem from  './components/collapse/collapse-item'
import Col from  './components/grid/col'
import Row from  './components/grid/row'
import Input from  './components/input/input'
import Content from  './components/layout/content'
import Footer from  './components/layout/footer'
import Header from  './components/layout/header'
import Layout from  './components/layout/layout'
import Sider from  './components/layout/sider'
import Tabs from  './components/tabs/tabs'
import TabsBody from  './components/tabs/tabs-body'
import TabsHead from  './components/tabs/tabs-head'
import TabsItem from  './components/tabs/tabs-item'
import TabsPane from  './components/tabs/tabs-pane'
import Toast from  './components/toast/toast'

import Plugin from './components/plugin'
const components = [Button, ButtonGroup, Collapse, CollapseItem, Col, Row, Input, Content, Footer,
Header, Layout, Sider, Tabs, TabsBody, TabsHead, TabsItem, TabsPane, Toast]

components.forEach(component => {
    component.install = Vue => {
        Vue.component(component.name, component)
    }
})

export {Button, ButtonGroup, Collapse, CollapseItem, Col, Row, Input, Content, Footer,
    Header, Layout, Sider, Tabs, TabsBody, TabsHead, TabsItem, TabsPane, Toast, Plugin}
