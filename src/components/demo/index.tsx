import React, { useState } from 'react'
import { Table } from 'antd'

import QueryForm from './QueryForm'

import { demoColumns } from './columns'
import { DemoResponse } from '../../interfaces/Demo'

const Demo = () => {
  const [demo, setDemo] = useState<DemoResponse>(undefined)

  const getTotal = () => {
    let total: number
    if (typeof demo !== 'undefined') {
      total = demo.length
    } else {
      total = 0
    }
    return <p>共 {total} 名偶像</p>
  }

  return (
    <>
      <QueryForm onDataChange={setDemo} />
      {getTotal()}
      <Table columns={demoColumns} dataSource={demo} className="table" />
    </>
  )
}

export default Demo