import React, { useEffect } from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Table } from 'antd'
import { getProvinces } from '../../../../../redux/appSettings'

interface IProps {
    onGetProvinces(upperCode?: string): void;
    provinces: IProvince[];
}
const ProvinceList = (props: IProps) => {
    const { provinces, onGetProvinces } = props
    useEffect(() => {
        onGetProvinces()
    }, [onGetProvinces])
    const columns = [
        {
          title: 'UUID',
          dataIndex: 'uuid',
          key: 'uuid',
        },
        {
          title: '上级代码',
          dataIndex: 'upperCode',
          key: 'upperCode',
        },
        {
          title: '代码',
          dataIndex: 'code',
          key: 'code',
        },
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          key: 'createTime',
        },
        {
          title: '修改时间',
          dataIndex: 'updateTime',
          key: 'updateTime',
        },
    ]
    return <>
        <Table
            rowKey="uuid"
            dataSource={provinces}
            columns={columns}
        />
    </>
}

const mapStateToProps = (state: any) => ({
    provinces: state.appSettings.provinces
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetProvinces: getProvinces
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProvinceList)

