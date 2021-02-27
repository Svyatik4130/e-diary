import React from 'react'

export default function TopBar() {
    return (
        <div className="flex justify-between mb-4 py-5 items-center">
            <div className="text-3xl font-semibold">Dashboard</div>
            <div>
                <img className="rounded-full object-cover h-14 w-14" src="https://www.swiatobrazu.pl/zdjecie/artykuly/542405/portret-biznesowy-6-porad-4.jpg" alt="profile photo"/>
            </div>
        </div>
    )
}
