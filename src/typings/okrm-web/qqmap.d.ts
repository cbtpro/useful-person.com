declare var qq: any

interface LngLat {
    lat: number
    lng: number
}
enum EResultType {
    AREA_INFO = AREA_INFO
}
enum EMapType {
    ROADMAP = ROADMAP,
    SATELLITE = SATELLITE,
    HYBRID = HYBRID
}
interface ResultDetail {
    name: string
    latLng: LngLat
    level: number
}
interface Result {
    type: EResultType
    detail: ResultDetail
}
const MapType = {
  ROADMAP: 'ROADMAP',
  SATELLITE: 'SATELLITE',
  HYBRID: 'HYBRID'
}