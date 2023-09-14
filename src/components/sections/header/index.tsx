import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {

    const menuOptions = [
        { id: "", name: "Qué hacemos" },
        { id: "quienes", name: "Quiénes somos" },
        { id: "", name: "Nuestra tech" },
        { id: "", name: "Experiencia Duh!" }
    ]

    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="w-full flex justify-center items-center">
            <div className="w-full p-6 flex flex-row justify-between items-start lg:items-center max-w-[1280px] bg-[#965BDD]">
                <img src="img/logo.svg" className="z-50"/>
                <div className="flex w-full justify-end">
                    <button className="lg:hidden" onClick={handleMenu}>
                        <img className="z-50" src="img/menu.svg" />
                    </button>
                    <div
                        className={`${showMenu ? "opacity-100" : "lg:opacity-100 opacity-0"} z-30 bg-[#965BDD] duration-300 absolute inset-x-0 lg:static flex flex-col lg:flex-row justify-end items-center gap-2 lg:gap-8 w-full lg:w-auto shadow-md lg:shadow-none pb-4 Aglet`}
                        style={{
                            top: showMenu ? '90px' : '-250px'
                        }}
                    >
                        {menuOptions.map((menu: { id: string, name: string }, index: number) => {
                            return (
                                <Link key={index} to={menu.id} smooth={true} duration={500} offset={-30} className="h-12">
                                    <button className="text-white w-full h-full">
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
