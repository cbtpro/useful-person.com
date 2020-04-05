import React, { useState } from 'react'
import { Table } from 'antd'

import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import QueryForm from './QueryForm'

import { demoColumns } from './columns'
import { DemoResponse, DemoRequest } from '../../interfaces/Demo'
import { getDemo } from '../../redux/demo'
import './index.less'

interface IProps {
  onGetDemo(param: DemoRequest, callback: () => void): void;
  demoList: DemoResponse
}

const Demo = (props: IProps) => {
  const [loading, setLoading] = useState(false)

  const getTotal = () => {
    let total: number
    if (typeof props.demoList !== 'undefined') {
      total = props.demoList.length
    } else {
      total = 0
    }
    return <p>共 {total} 名偶像</p>
  }

  return (
    <>
      <QueryForm getData={props.onGetDemo} setLoading={setLoading} />
      {getTotal()}
      <Table columns={demoColumns} dataSource={props.demoList} loading={loading} className="table" />
    </>
  )
}

const mapStateToProps = (state: any) => ({
  demoList: state.demo.demoList
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onGetDemo: getDemo
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo)
