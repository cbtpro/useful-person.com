import React from 'react';
import { Button, DatePicker } from 'antd'
import HomeLayout from './components/HomeLayout'

import Demo from './components/demo'

import './themes/default.less'
import './App.css';

function App() {
  return (
    <HomeLayout>
      <h1>Hello World!</h1>
      <Demo />
      <DatePicker />
      <Button type="primary">Button</Button>
    </HomeLayout>
  );
}

export default App;
