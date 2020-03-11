import * as React from 'react'
import { Route, IndexRoute } from 'react-router'

import NotFund from './components/notFund'
import Contrainer from './views/contrainer'
import LayoutPreview from './views/layout'
import TablePreview from './views/table'
import ButtonPreview from './views/button'
import ModalPreview from './views/modal'
import FormPreview from './views/form'
export default (
    <Route path="/" component={Contrainer}>
        <IndexRoute component={LayoutPreview} />
        <Route path="/layout" component={LayoutPreview}></Route>
        <Route path="/table" component={TablePreview}></Route>
        <Route path="/button" component={ButtonPreview}></Route>
        <Route path="/modal" component={ModalPreview}></Route>
        <Route path="/form" component={FormPreview}></Route>
        {/* <Route path="/admin" component={SysAdmin}>
            <IndexRoute component={AdminUser} />
            <Route path="user" component={AdminUser} />
        </Route> */}
        <Route path="/*" component={NotFund} />
    </Route>
)
