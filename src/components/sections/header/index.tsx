import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {

    const menuOptions = [
        { id: "", name: "Qué hacemos" },
        { id: "", name: "Quiénes somos" },
        { id: "", name: "Nuestra tech" },
        { id: "", name: "Experiencia Duh!" }
    ]

    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="w-full flex justify-center items-center">
            <div className="w-full p-6 flex flex-row justify-between items-start lg:items-center max-w-[1024px] bg-[#965BDD]">
                <img src="img/logo.svg" />
                <div className="w-full flex justify-end">
                    <button className="lg:hidden" onClick={handleMenu}>
                        <img className="" src="img/menu.svg" />
                    </button>
                    <div
                        className={`${showMenu ? "opacity-100" : "lg:opacity-100 opacity-0"}  z-40 bg-[#965BDD] duration-300 absolute inset-x-0 lg:static flex flex-col lg:flex-row justify-end items-center gap-6 w-full lg:w-auto shadow-md lg:shadow-none pb-8`}
                        style={{
                            top: showMenu ? '102px' : '-200px'
                        }}
                    >
                        {menuOptions.map((menu: { id: string, name: string }, index: number) => {
                            return (
                                <Link key={index} to={menu.id} smooth={true} duration={500}>
                                    <button className="text-white">
                                        {menu.name}
                                    </button>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}
