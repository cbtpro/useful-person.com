interface IPane {
    name: string;
    key: string;
    content: JSX.Element;
}
interface ITabs {
    [x: string]: JSX.Element;
}
interface IProvince {
    uuid: string // "a572f8fe-9013-4e19-908a-5c28607205df"
    code: string // "110000"
    name: string // 北京市
    upperCode: string // "86" | "110000"
    description?: string // null | ""
    updateTime: string // "2020-08-08T14:18:45.359+00:00"
    createTime: string // "2020-08-08T14:18:45.359+00:00"
    children: IProvince[]
}
interface IProvinceCascade {
    label: string
    value: string
    children?: IProvinceCascade[]
}
