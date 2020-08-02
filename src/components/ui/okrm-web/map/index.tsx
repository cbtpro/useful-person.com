import React from 'react'
// import { loadScript } from '../../../../utils/Loader'
// import { QQ_MAP_JS_URI } from '../../../../constants/App'
// const QQMap = loadScript(QQ_MAP_JS_URI, () => import('../../../map'))
import { QQMap } from '../../../map'

export default () => {
  React.useEffect(() => {
    return () => {
    }
  })
  return <>
    <QQMap />
  </>
}