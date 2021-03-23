import React from 'react'

import TopBar from '../layout/TopBar'
import Dashboard from './Dashboard'
import { Switch, Route } from "react-router-dom";
import Lessons from './Lessons'

export default function Main() {
    return (
        <div id="main" className="px-8 rounded-l-3xl bg-gray-100 flex flex-grow">
            <TopBar />
            <Switch>
                <Route path="/main/dashboard" component={Dashboard} />
                <Route path="/main/lessons" component={Lessons} />
            </Switch>
        </div>
    )
}
