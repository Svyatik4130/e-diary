import React from 'react'

export default function Sidebar() {
    return (
            <aside className="flex h-screen m-1 bg-indigo-400 rounded-lg" id="sidebar">
                    <ul className="list-reset w-full">
                        <li className="p-4 pb-20 text-center"><a href="" className="block"><i></i><span className="uppercase text-white font-bold text-4xl">e-diary</span></a></li>
                        <li className="mr-3 font-medium text-lg text-indigo-200 mt-9 text-center"><a href="" className="block"><i></i><span>About</span></a></li>
                        <li className="mr-3 font-medium text-lg text-indigo-200 mt-9 text-center"><a href="" className="block"><i></i><span>Main</span></a></li>
                        <li className="mr-3 font-medium text-lg text-indigo-200 mt-9 text-center"><a href="" className="block"><i></i><span>Lessons</span></a></li>
                        <li className="mr-3 font-medium text-lg text-indigo-200 mt-9 text-center"><a href="" className="block"><i></i><span>Table</span></a></li>
                        <li className="mr-3 font-medium text-lg text-indigo-400 bg-white p-3 mx-2 rounded-lg mt-9 text-center"><a href="" className="block"><i></i><span>Marks</span></a></li>
                        <li className="mr-3 font-medium text-lg text-indigo-200 mt-9 text-center"><a href="" className="block"><i></i><span>Settings</span></a></li>
                    </ul>
            </aside>
    )
}
