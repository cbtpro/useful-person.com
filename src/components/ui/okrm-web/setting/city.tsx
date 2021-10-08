import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Button, Card, Col, Form, Input, Row } from 'antd'
import ProvinceTable from '../components/provinceTable'
import ProvinceSelect from '../components/provinceSelect'

interface IProps {
}
const City = (props: IProps) => {
    const renderSearchForm = () => {
        return <>
            <Form name="searchForm">
                <Row gutter={24}>
                    <Col>
                        <Form.Item label="关键字" name="keyword"><Input placeholder="请输入关键字" /></Form.Item>
                    </Col>
                    <Col>
                        <Form.Item><Button type="primary">搜索</Button></Form.Item>
                    </Col>
                    <Col>
                        <Form.Item><Button type="dashed">预览</Button></Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    }

    return <>
        <Row>
            <Col span={24}>{renderSearchForm()}</Col>
        </Row>
        <Row>
            <Col>
                <Card title="省份列表" bordered={false}>
                    <ProvinceTable />
                </Card>
            </Col>
            <Col span={4}>
                <Card title="预览" bordered={false}>
                    <ProvinceSelect />
                </Card>
            </Col>
        </Row>
    </>
}

const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)