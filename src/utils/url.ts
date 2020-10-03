export const joint = (url: string, params: any) => {
    let paramsStr = ''
    for (let key in params) {
        const value = params[key]
        paramsStr += `&${key}=${encodeURIComponent(value)}`
    }
    return `${url}?${paramsStr}`
}
export const split = (url?: string) => {
    let paramStr: string
    if (url) {
        paramStr = url.substring(url.indexOf('?') + 1)
    } else {
        paramStr = window.location.search.substr(1)
    }
    const param = paramStr.split('&')
        .map(param => param.split('='))
    const paramObj: { [x: string]: string } = {}
    for (let i = 0; i < param.length; i++) {
        const [key, value] = param[i]
        paramObj[key] = value
    }
    return paramObj
}

export const getUrlParam = (name: string) => {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    const r = window.location.search.substr(1).match(reg)  //匹配目标参数
    if (r !== null) {
        return unescape(r[2])
    } else {
        return null; //返回参数值
    }
}