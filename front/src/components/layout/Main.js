import React from 'react'

import TopBar from './TopBar'
import Dashboard from './Dashboard'

export default function Main() {
    return (
        <div id="main" className="px-8 col-span-5 rounded-l-3xl bg-gray-100">
            <TopBar/>
            <Dashboard/>
        </div>
    )
}
