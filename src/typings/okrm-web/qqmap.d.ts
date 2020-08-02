declare var qq: any

interface LngLat {
    lat: number
    lng: number
}
enum ResultType {
    AREA_INFO = AREA_INFO
}
interface ResultDetail {
    name: string
    latLng: LngLat
    level: number
}
interface Result {
    type: ResultType
    detail: ResultDetail
}
