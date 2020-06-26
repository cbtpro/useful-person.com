import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Root from './routers';
import store from './redux/store'
import './index.css';
import * as serviceWorker from './serviceWorker';

import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Root />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
