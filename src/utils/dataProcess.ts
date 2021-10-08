import { CascaderOptionType } from 'antd/lib/cascader'
import { DataNode } from 'antd/lib/tree'

export function processProvinces(result: CascaderOptionType[] = [], provinces: IProvince[], parentUpperCode: string | number | undefined = '86') {
    if (!Array.isArray(provinces)) {
        return result
    }
    const _provinces = [...provinces]
    _provinces.forEach((province, i) => {
        let { upperCode } = province
        if (upperCode === parentUpperCode) {
            let { code, name } = province
            result.push({
                label: name,
                value: code
            })
            _provinces.splice(i, 1)
        }
    })
    result.forEach(item => {
        let { value } = item
        let children = processProvinces([], _provinces, value)
        if (children.length > 0) item.children = children
    })
    return result
}

export function processTreeProvinces(result: DataNode[], provinces: IProvince[], parentUpperCode: string | number | undefined = '86') {
    if (!Array.isArray(provinces)) {
        return result
    }
    const _provinces = [...provinces]
    _provinces.forEach((province, i) => {
        const { upperCode } = province
        if (upperCode === parentUpperCode) {
            const { code, name } = province
            result.push({
                title: name,
                key: code,
            })
            _provinces.splice(i, 1)
        }
    })
    result.forEach(item => {
        const { key } = item
        const children = processTreeProvinces([], _provinces, key)
        if (children.length > 0) item.children = children
    })
    return result
}