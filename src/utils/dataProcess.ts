import { CascaderOptionType } from "antd/lib/cascader"

export function processProvinces(result: CascaderOptionType[] = [], provinces: IProvince[], parentUpperCode = '86') {
    if (!Array.isArray(provinces)) {
        return result
    }
    provinces.forEach((province, i) => {
        let { upperCode } = province
        if (upperCode === parentUpperCode) {
            let { code, name } = province
            result.push({
                label: name,
                value: code
            })
            provinces.splice(i, 1)
        }
    })
    result.forEach(item => {
        let { value } = item
        let children = processProvinces([], provinces, value)
        if (children.length > 0) item.children = children
    })
    return result
}