import React from 'react'
import reactLoadable from 'react-loadable'
import Loading from '../components/loading'

const DynamicLoadingComponent = (component: Promise<React.ComponentType>, haveLoading = false) => {
    return reactLoadable({
        loader: () => component,
        loading: () => {
            if (haveLoading) {
                return <Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />
            }
            return null
        }
    })
}

export default DynamicLoadingComponent