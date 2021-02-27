import React from 'react'

import TopBar from './TopBar'
import Dashboard from './Dashboard'

export default function Main() {
    return (
        <div id="main" className="mx-8 col-span-5">
            <TopBar/>
            <Dashboard/>
        </div>
    )
}
