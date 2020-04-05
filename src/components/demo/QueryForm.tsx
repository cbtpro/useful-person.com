import React, { useState, useEffect } from 'react'
import { Form, Input, Select, Button } from 'antd'
import { FormProps } from 'antd/lib/form'
import { get } from '../../http'
import { GET_DEMO_URL } from '../../constants/urls'
import { DemoRequest, DemoResponse } from '../../interfaces/Demo'

const { Option } = Select

interface IProps extends FormProps {
  onDataChange(data: DemoResponse): void
}

const QueryFormHook = (props: IProps) => {
  const [name, setName] = useState('')
  const [sexId, setSexId] = useState<number | undefined>(undefined);

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const handleSexChange = (value: number) => {
    setSexId(value)
  }

  const handleSubmit = () => {
    queryDemo({name, sexId})
  }

  const queryDemo = (param: DemoRequest) => {   
    get(GET_DEMO_URL, param).then(response => {
      props.onDataChange(response.data)
    })
  }

  useEffect(() => {
    queryDemo({name, sexId})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Form layout="inline">
        <Form.Item>
          <Input
            placeholder="姓名"
            style={{ width: 120 }}
            allowClear
            value={name}
            onChange={handleNameChange}
          />
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="性别"
            style={{ width: 120 }}
            allowClear
            value={sexId}
            onChange={handleSexChange}
          >
            <Option value={0}>女</Option>
            <Option value={1}>男</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>查询</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default QueryFormHook