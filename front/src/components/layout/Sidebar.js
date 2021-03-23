import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


export default function Sidebar() {
    const history = useHistory();
    const [PageButtons, setPageButtons] = useState({
        "About": { isActive: false, ParentClassName: "bg-indigo-450", ChildClassName: "text-indigo-200" },
        "Marks": { isActive: true, ParentClassName: "bg-gray-100", ChildClassName: "bg-gray-100" },
        "Lessons": { isActive: false, ParentClassName: "bg-indigo-450", ChildClassName: "text-indigo-200" }
    })
    const [sidebar, setSidebar] = useState("hidden")
    const handleSidebarClick = (url, linkName) => {
        history.push(url)

        if (!PageButtons[linkName].isActive) {
            // setPageButtons({
            //     ...PageButtons,
            //     [linkName]: { isActive: false, ParentClassName: "bg-gray-100 outActive", ChildClassName: "bg-gray-100 outActive-child" }
            // })
            // setTimeout(() => {
            //     setPageButtons({
            //         ...PageButtons,
            //         [linkName]: { isActive: false, ParentClassName: "bg-indigo-450", ChildClassName: "text-indigo-200" }
            //     })
            // }, 1600)


            // Найдем активный элемент меню
            let foundObjectKey = Object.keys(PageButtons).filter(link => PageButtons[link].isActive)[0]
            // применяем аним к активному и нажатому элементам
            setPageButtons({
                ...PageButtons,
                [linkName]: { isActive: true, ParentClassName: "bg-indigo-450 inActive", ChildClassName: "text-indigo-200 inActive-child" },
                [foundObjectKey]: { isActive: false, ParentClassName: "bg-gray-100 outActive", ChildClassName: "bg-gray-100 outActive-child" }
            })
            // возвращаем исходные стили активному и нажатому элементу
            setTimeout(() => {
                setPageButtons({
                    ...PageButtons,
                    [linkName]: { isActive: true, ParentClassName: "bg-gray-100", ChildClassName: "bg-gray-100 " },
                    [foundObjectKey]: { isActive: false, ParentClassName: "bg-indigo-450", ChildClassName: "text-indigo-200" }
                })
            }, 1400)
        }
    }

    let handleSidebar = () => {
        sidebar == "hidden" ? setSidebar("") : setSidebar("hidden");
    }

    return (
        <>
            <button type="button" onClick={() => handleSidebar()} className="fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 text-white md:hidden block">
                <span className="sr-only">Open site navigation</span>
                <svg width="24" height="24" fill="none" className="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform">
                    <path d="M4 8h16M4 16h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <svg width="24" height="24" fill="none" className="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform opacity-0 scale-80">
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
            <aside className={`flex flex-grow-1 fixed inset-0 h-screen bg-indigo-450 col-span-4 md:col-span-1 md:block ${sidebar} lg: w-40 xl: w-60`} id="sidebar">
                <ul className="list-reset w-full items-end">
                    <li className="p-4 pb-20 text-center"><a onClick={() => handleSidebarClick("/main/dashboard")} className="block cursor-pointer"><i></i><span className="uppercase text-white font-bold text-4xl">e-diary</span></a></li>
                    <li className="mr-3 font-medium text-lg text-indigo-200 my-7 text-center"><a className="block"><i></i><span>teachers</span></a></li>
                    <li onClick={() => handleSidebarClick("/main/lessons", "Lessons")} className={`mr-0 ${PageButtons["Lessons"].ParentClassName} rounded-l-full transition-all font-medium text-lg text-indigo-450 ml-8 text-center cursor-pointer`} >
                        <dd className={`p-1 h-4 rounded-br-full bg-transparent bg-indigo-450`}></dd>
                        <a className={`${PageButtons["Lessons"].ChildClassName} rounded-l-full -ml-6 block py-3`}><span>Lessons</span></a>
                        <dd className={`p-1 h-4 rounded-tr-full bg-indigo-450`}></dd>
                    </li>
                    <li className="mr-3 font-medium text-lg text-indigo-200 my-7 text-center"><a className="block"><i></i><span>Main</span></a></li>

                    <li onClick={() => handleSidebarClick("/main/dashboard", "Marks")} className={`mr-0 ${PageButtons["Marks"].ParentClassName} transition-all duration-1000 font-medium text-lg text-indigo-450 ml-8 text-center cursor-pointer`} >
                        <dd className={`p-1 h-4 rounded-br-full right-0 bg-transparent bg-indigo-450`}></dd>
                        <a className={`${PageButtons["Marks"].ChildClassName} transition-all duration-1000 -ml-6 block rounded-l-full py-3`}><i></i><span>Marks</span></a>
                        <dd className={`p-1 h-4 rounded-tr-full bg-indigo-450`}></dd>
                    </li>

                    {/* active */}
                    <li onClick={() => handleSidebarClick("/main/lessons", "About")} className={`mr-0 ${PageButtons["About"].ParentClassName} rounded-l-full transition-all font-medium text-lg text-indigo-450 ml-8 text-center cursor-pointer`} >
                        {/* bg-gray-100 */}
                        <dd className={`p-1 h-4 rounded-br-full bg-transparent bg-indigo-450`}></dd>
                        {/* bg-gray-100 */}
                        <a className={`${PageButtons["About"].ChildClassName} rounded-l-full -ml-6 block py-3`}><span>About</span></a>
                        <dd className={`p-1 h-4 rounded-tr-full bg-indigo-450`}></dd>
                    </li>
                    {/* <li onClick={() => PushUrl("/main/lessons")} className={`mr-0 ${ParentClassName} bg-gray-100 rounded-l-full transition-all font-medium text-lg text-indigo-450 ml-8 text-center cursor-pointer`} >
                    <dd className={`p-1 h-4 rounded-br-full bg-transparent bg-indigo-450`}></dd>
                        <a className={`bg-gray-100 ${ChildClassName} rounded-l-full -ml-6 block py-3`}><span>Marks</span></a>
                    <dd className={`p-1 h-4 rounded-tr-full bg-indigo-450`}></dd>
                </li> */}
                    {/* /active */}

                    <li className="mr-3 font-medium text-lg text-indigo-200 my-7 text-center"><a className="block"><i></i><span>Settings</span></a></li>
                </ul>
            </aside>
        </>
    )
}
