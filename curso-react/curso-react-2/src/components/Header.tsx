//import { useState } from "react"
import './../input.css'

function Header() {

    //const [nome, setNome] = useState(0)

    return (
        <>
            <header>
                <div className='box-border hover:box-content bg-green-500'>
                    <nav className="bg-lime-800">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold">NAVBAR</h1>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header