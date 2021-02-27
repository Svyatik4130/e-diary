import React from 'react'

export default function Sidebar() {
    return (
            <aside className="fixed flex-none h-full w-full lg:w-60" id="sidebar">
                    <ul className="list-reset flex flex-col">
                        <li className="flex-1 w-full h-full py-3 px-2 border-b border-light-border"><a href="" className="block"><i></i><span>Main</span></a></li>
                        <li className="mr-2 flex-1"><a href="" className="block"><i></i><span>Lessons</span></a></li>
                        <li className="mr-2 flex-1"><a href="" className="block"><i></i><span>Table</span></a></li>
                        <li className="mr-2 flex-1"><a href="" className="block"><i></i><span>Marks</span></a></li>
                        <li className="mr-2 flex-1"><a href="" className="block"><i></i><span>Settings</span></a></li>
                        <li className="mr-2 flex-1"><a href="" className="block"><i></i><span>About</span></a></li>
                    </ul>
            </aside>
    )
}
