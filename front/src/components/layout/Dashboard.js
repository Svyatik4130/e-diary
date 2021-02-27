import React from 'react'

export default function Dashboard() {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-3 bg-indigo-400 h-full rounded-lg p-11 grid grid-cols-5">
                <div className="col-span-3 text-white">
                    <p className="text-2xl font-semibold mb-6">Hello Mr Nick</p>
                    <p> ReactJS MongoDB NodeJS Express is the best bundle in the world for todayReactJS MongoDB NodeJS Express is the best bundle in the world for today</p>
                </div>
                <div className="col-span-2">
                    <img className="h-full w-full" src="images/Richie_4.png" alt="PlacePhoto"/>
                </div>
            </div>
            <div className="col-span-2">
            </div>
        </div>
    )
}
