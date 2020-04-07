import React from 'react'
import { asyncComponent } from 'react-async-component'
import Loading from '../components/loading'

const AsyncLoadingComponet = (component: any, isLoading = true) => (
    asyncComponent({
        resolve: () => component,
        LoadingComponent: () => {
            if (isLoading) {
                return <Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />
            }
            return <div></div>
        }
    })
);

export default AsyncLoadingComponet