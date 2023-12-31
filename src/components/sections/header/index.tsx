import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Header() {

    const menuOptions = [
        { id: "conocenos", name: "Qué hacemos" },
        { id: "quienes", name: "Quiénes somos" },
        { id: "pensadaparati", name: "Nuestra tech" },
        { id: "experiencia", name: "Experiencia Duh!" },
        { id: "contacto", name: "Habla con nosotros" }
    ]

    const [showMenu, setShowMenu] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleMenu() {
        setShowMenu(!showMenu)
    }

    return (
        <nav className={`w-full flex justify-center items-center fixed bg-[#8357ba] z-[999] duration-300 ${scrollPosition > 50 ? "shadow-lg" : ""}`}>
            <div className="w-full p-5 flex flex-row justify-between items-start lg:items-center max-w-[1280px] ">
                <img src="img/logo.svg" className="z-50 lg:w-28" />
                <div className="flex w-full justify-end">
                    <button className="lg:hidden" onClick={handleMenu}>
                        <img className="z-50" src="img/menu.svg" />
                    </button>
                    <div
                        className={`${showMenu ? "opacity-100 bg-[#7c52ad] sm:bg-transparent" : "lg:opacity-100 opacity-0"} z-30 duration-300 absolute inset-x-0 lg:static flex flex-col lg:flex-row justify-end items-center gap-2 lg:gap-8 w-full lg:w-auto shadow-md lg:shadow-none pb-4 Aglet`}
                        style={{
                            top: showMenu ? '88px' : '-300px',

                        }}
                    >
                        {menuOptions.map((menu: { id: string, name: string }, index: number) => {
                            return (
                                <Link key={index} to={menu.id} smooth={true} duration={500} offset={-30} className="h-12">
                                    <button className={`text-white w-full h-full ${menu.name == "Habla con nosotros" ? "md:font-bold md:rounded-3xl md:px-4 md:py-1 md:bg-[#F4CA58] md:text-[#965BDD]" : ""}`}>
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
