import React from 'react'
import { Button, DatePicker } from 'antd'
import B from './B'

import './App.scss'

const helloStyle = { color: 'red' }
interface A<T> {
  result: T
}

const App = () => {
  return <div>
    <p style={helloStyle}>Hello world!</p>
    <p className="some-class-say-what">Hello world!</p>
    <B />
    <DatePicker />
    <Button>你好</Button>
    <style jsx>{`
      p {
        font-size: 36px;
      }
    `}</style>
  </div>
}

export default App