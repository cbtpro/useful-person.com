import React, { useEffect, useState } from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Tree } from 'antd'
import { processTreeProvinces } from '../../../../../utils/dataProcess'
import { DataNode } from 'antd/lib/tree'

const styles = {
    container: {
        width: '100%',
        height: 'calc(100vh - 220px)',
        overflow: 'scroll',
    }
}
interface IProps {
    provinces: IProvince[];
}
const ProvinceSelect = (props: IProps) => {
    const { provinces } = props
    const [provinceTreeData, setProvinceTreeData] = useState([] as DataNode[])
    useEffect(() => {
        setProvinceTreeData(processTreeProvinces([], provinces))
    }, [provinces])
    const onDragEnter = () => {}
    const onDrop = () => {}
    return <div style={styles.container}>
        <Tree
            autoExpandParent={true}draggable
            blockNode
            onDragEnter={onDragEnter}
            onDrop={onDrop}
            treeData={provinceTreeData}
        />
    </div>
}

const mapStateToProps = (state: any) => ({
    provinces: state.appSettings.provinces
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProvinceSelect)
