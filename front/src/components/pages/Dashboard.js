import React from 'react'

import ChartCard from '../Chart/ChartCard'
import ChartLegend from '../Chart/ChartLegend'
import { Doughnut, Line, Bar } from 'react-chartjs-2'
import {
    doughnutOptions,
    lineOptions,
    barOptions,
    doughnutLegends,
    lineLegends,
    barLegends,
} from '../utils/demo/chartsData'

export default function Dashboard() {
    return (
        <>
            {/* FIRST ROW */}
            <div className="grid grid-cols-5 gap-4 items-center">
                <div className="col-span-3 bg-indigo-450 h-full shadow-2xl rounded-xl p-11 grid grid-cols-5">
                    <div className="col-span-3 text-white">
                        <p className="text-2xl font-semibold mb-6">Hello Mr Nick</p>
                        <p> ReactJS MongoDB NodeJS Express is the best bundle in the world for todayReactJS MongoDB NodeJS Express is the best bundle in the world for today</p>
                    </div>
                    <div className="col-span-2">
                        <img className="h-full w-full" src="/images/Richie_4.png" alt="PlacePhoto" />
                    </div>
                </div>
                <div className="col-span-2">
                    <ChartCard title="Students' marks">
                        <Doughnut {...doughnutOptions} />
                        <ChartLegend legends={doughnutLegends} />
                    </ChartCard>
                </div>
            </div>

            {/* SECOND ROW */}
            <div className="grid mt-8 grid-cols-5 gap-4 items-center">
                <div className="col-span-2">
                    <ChartCard title="Students' marks">
                        <Doughnut {...doughnutOptions} />
                        <ChartLegend legends={doughnutLegends} />
                    </ChartCard>
                </div>
                <div className="col-span-3 bg-indigo-450 h-full shadow-2xl rounded-xl p-11 grid grid-cols-5">
                    <div className="col-span-3 text-white">
                        <p className="text-2xl font-semibold mb-6">Hello Mr Nick</p>
                        <p> ReactJS MongoDB NodeJS Express is the best bundle in the world for todayReactJS MongoDB NodeJS Express is the best bundle in the world for today</p>
                    </div>
                    <div className="col-span-2">
                        <img className="h-full w-full" src="/images/Richie_4.png" alt="PlacePhoto" />
                    </div>
                </div>
            </div>
        </>
    )
}
