interface IPane {
    name: string;
    key: string;
    content: JSX.Element;
}
interface ITabs {
    [x: string]: JSX.Element
}