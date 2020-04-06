import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from '../App'
import Entrance from '../entrance'
import OkrmManage from '../components/ui/okrm-manage'
import OkrmWeb from '../components/ui/okrm-web'
import WebAbout from '../components/ui/okrm-web/about'

const Root = () => (
  <BrowserRouter>
    <Route path="/" exact component={Entrance} />
    <Route path="/portal/*" exact component={App} />
    <Route path="/ui/okrm-manage" exact component={OkrmManage} />
    <Route path="/ui/okrm-web" exact component={OkrmWeb} />
    <Route path="/ui/okrm-web/about" exact component={WebAbout} />
  </BrowserRouter>
)

export default Root