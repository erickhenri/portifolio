import { Link, useLocation } from "react-router-dom"

interface menuProps {
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    menuOpen: boolean
}

export function Menu(props: menuProps) {
    const { pathname } = useLocation();
    
    return (
        <div className={`${props.menuOpen?"-translate-y-0":"-translate-y-full"} md:static md:translate-y-0 fixed md:ml-20 text-center h-screen w-screen md:w-auto md:h-auto bg-white md:bg-transparent flex flex-col items-center justify-center transition-transform duration-[400ms]`}>
            <ul className="flex flex-col gap-5">
                <li 
                    className={`${pathname.includes("about")?"text-blue-500 scale-105 border-blue-500":"text-blue-600 border-transparent"} text-2xl font-bold tracking-widest border-b hover:border-blue-500 hover:scale-105 hover:text-blue-500 transition cursor-pointer`}
                    onClick={() => {
                        props.setMenuOpen(false)
                    }}
                >
                    <Link to={"about"}>
                        SOBRE
                    </Link>
                </li>
                <li 
                    className={`${pathname.includes("repositories")?"text-blue-500 scale-105 border-blue-500":"text-blue-600 border-transparent"} text-2xl font-bold tracking-widest border-b hover:border-blue-500 hover:scale-105 hover:text-blue-500 transition cursor-pointer`}
                    onClick={() => {
                        props.setMenuOpen(false)
                    }}
                >
                    <Link to={"repositories"}>
                        REPOSITÓRIOS
                    </Link>
                </li>
                <li 
                    className={`${pathname.includes("contact")?"text-blue-500 scale-105 border-blue-500":"text-blue-600 border-transparent"} text-2xl font-bold tracking-widest border-b hover:border-blue-500 hover:scale-105 hover:text-blue-500 transition cursor-pointer`}
                    onClick={() => {
                        props.setMenuOpen(false)
                    }}
                >
                    <Link to={"contact"}>
                        CONTATO
                    </Link>
                </li>
            </ul>
        </div>
    )
}