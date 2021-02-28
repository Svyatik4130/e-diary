import React from 'react'

export default function Sidebar() {
    return (
        <aside className="flex h-screen bg-indigo-450" id="sidebar">
            <ul className="list-reset w-full">
                <li className="p-4 pb-20 text-center"><a href="" className="block"><i></i><span className="uppercase text-white font-bold text-4xl">e-diary</span></a></li>
                <li className="mr-3 font-medium text-lg text-indigo-200 my-7 text-center"><a href="" className="block"><i></i><span>About</span></a></li>
                <li className="mr-3 font-medium text-lg text-indigo-200 my-7 text-center"><a href="" className="block"><i></i><span>Main</span></a></li>
                <li className="mr-3 font-medium text-lg text-indigo-200 my-7 text-center"><a href="" className="block"><i></i><span>Lessons</span></a></li>
                <li className="mr-3 font-medium text-lg text-indigo-200 my-7 text-center"><a href="" className="block"><i></i><span>Table</span></a></li>

                {/* active */}
                <li className="mr-0 -my-2 font-medium text-lg bg-gray-100 text-indigo-450 ml-8 text-center">
                    <dd class="p-1 h-4 right-0 bg-transparent bg-indigo-450 rounded-br-full"></dd>
                        <a href="" className="bg-gray-100 -ml-6 block rounded-l-full py-3"><i></i><span>Marks</span></a>
                    <dd class="p-1 h-4 bg-indigo-450 rounded-tr-full"></dd>
                </li>
                {/* /active */}

                <li className="mr-3 font-medium text-lg text-indigo-200 my-7 text-center"><a href="" className="block"><i></i><span>Settings</span></a></li>
            </ul>
        </aside>
    )
}
