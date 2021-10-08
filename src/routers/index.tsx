import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import App from '../App'
import Entrance from '../entrance'
import OkrmWeb from '../components/ui/okrm-web'
import WebAbout from '../components/ui/okrm-web/about'

const Root = () => (
  <HashRouter>
    <Route path="/" exact component={Entrance} />
    <Route path="/portal/*" exact component={App} />
    <Route path="/ui/okrm-web" exact render={() => <OkrmWeb />} />
    <Route path="/ui/okrm-web/about" exact component={WebAbout} />
  </HashRouter>
)

export default Root