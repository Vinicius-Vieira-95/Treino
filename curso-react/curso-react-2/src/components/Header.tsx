//import { useState } from "react"
import './../input.css'

function Header() {

    //const [nome, setNome] = useState(0)

    return (
        <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 '>
            <header className="bg-green-500 text-white">
                <nav className="relative bg-white shadow dark:bg-gray-800">
                    <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center  w-full">
                        <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                            <div className="flex flex-col md:flex-row md:mx-6">
                                <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Vini</a>
                                <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Shop</a>
                                <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Contact</a>
                                <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">About</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header