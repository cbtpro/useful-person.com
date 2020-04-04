import React from 'react'
import { Button, DatePicker } from 'antd'
import './App.scss'

const App = () => {
  return <div>
    <p style={{ color: 'red' }}>Hello world!</p>
    <p className="some-class-sayWhat">Hello world!</p>
    <DatePicker />
    <Button>你好</Button>
  </div>
}

export default App