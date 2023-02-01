import React from 'react'

export const lazyLoad = (path: string) => {
    const Comp = React.lazy(() => import(`../../pages/${path}`))
    return (
        <React.Suspense fallback={<>Loading</>}>
            <Comp />
        </React.Suspense>
    )
}