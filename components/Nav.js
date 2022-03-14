import { useSession, signOut, signIn, getCsrfToken } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Nav() {
    const { data: session } = useSession()
    const [dropdown, setDropdown] = useState(false);
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const toggleOpen = () => {
        setDropdown(!dropdown);
        setDropdownMenu(false);
        console.log(session.user.name)
    }
    const toggleOpenMenu = () => {
        setDropdownMenu(!dropdownMenu);
        setDropdown(false);
    }

    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link href="/" className="flex" passHref>
                        <span style={{ cursor: `pointer` }}>
                            <Image src={'/images/logo.png'} alt="logo" width={200} height={75}></Image>
                        </span>
                    </Link>
                    <div className="flex items-center md:order-2">
                        <button onClick={toggleOpen} type="button" className="flex mr-3 text-sm bg-independence rounded-full md:mr-0 focus:ring-2 focus:ring-ring-inset dark:focus:ring-ring-inset" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                            <span className="sr-only">Open user menu</span>
                            {session ? <Image className="w-8 h-8 rounded-full" src={session.user.image || 'https://i.stack.imgur.com/34AD2.jpg'} alt="profile image" width={40} height={40} />
                                : <Image id="default-pic" className="w-8 h-8 rounded-full" src={'https://i.stack.imgur.com/34AD2.jpg'} alt="profile image" width={40} height={40} />}
                        </button>
                        {/* Dropdown menu profile pic */}
                        <div className={`container dropdown-menu hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${dropdown ? 'show hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600' : ''}`}
                            aria-labelledby="dropdownMenuButton"
                            id="dropdown"
                            style={{ width: `50%`, left: `50%` }}>
                            <div className="py-3 px-4">
                                {session?.user?.name && <span className="block text-sm text-gray-900 dark:text-white">{session.user.name}</span>}
                                {session && <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{session.user.email}</span>}
                            </div>
                            <ul className="py-1" aria-labelledby="dropdown" style={{ padding: `0.5rem` }}>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a onClick={() => signOut()} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button onClick={toggleOpenMenu} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-darkpurple rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-1 focus:ring-white dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    {/* Dropdown menu burger button mobile  */}
                    <div
                        className={`hidden justify-between items-center w-full md:flex md:w-auto md:order-1 ${dropdownMenu ? 'dropdown-menu show hidden justify-between items-center w-full md:flex md:w-auto md:order-1 border-white p-0' : ''}`}
                        /* id="mobile-menu-2" */
                        aria-labelledby="dropdownMenuButton"
                        id="dropdownMenu"
                    >
                        <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium sm:font-Montserrat md:font-MontserratBold uppercase">
                            <li>
                                <Link href="/" passHref>
                                    <a className="block py-2 pr-4 pl-3 text-slate-50 md:text-indigo-900 bg-darkpurple md:bg-white border-b rounded-t border-white">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/react">
                                    <a className="block py-2 pr-4 pl-3 text-slate-50 md:text-indigo-900 bg-darkpurple md:bg-white border-b border-white">React</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/javascript">
                                    <a className="block py-2 pr-4 pl-3 text-slate-50 md:text-indigo-900 bg-darkpurple md:bg-white border-b border-white">Javascript</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/styles">
                                    <a className="block py-2 pr-4 pl-3 text-slate-50 md:text-indigo-900 bg-darkpurple md:bg-white rounded-b border-b border-white">Styles</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}