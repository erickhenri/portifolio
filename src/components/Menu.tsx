interface menuProps {
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    menuOpen: boolean
    setInfoOption: React.Dispatch<React.SetStateAction<string>>
    infoOption: string
}

export function Menu(props: menuProps) {
    return (
        <div className={`${props.menuOpen?"-translate-y-0":"-translate-y-full"} md:static md:translate-y-0 fixed md:ml-20 text-center h-screen w-screen md:w-auto md:h-auto bg-white md:bg-transparent flex flex-col items-center justify-center transition-transform duration-[400ms]`}>
            <ul className="flex flex-col gap-5">
                <li 
                    className={`${props.infoOption==="about"?"text-blue-500 scale-105 border-blue-500":"text-blue-600 border-transparent"} text-2xl font-bold tracking-widest border-b hover:border-blue-500 hover:scale-105 hover:text-blue-500 transition cursor-pointer`}
                    onClick={() => {
                        props.setMenuOpen(false)
                        props.setInfoOption("about")
                    }}
                >
                    SOBRE
                </li>
                <li 
                    className={`${props.infoOption==="repositories"?"text-blue-500 scale-105 border-blue-500":"text-blue-600 border-transparent"} text-2xl font-bold tracking-widest border-b hover:border-blue-500 hover:scale-105 hover:text-blue-500 transition cursor-pointer`}
                    onClick={() => {
                        props.setMenuOpen(false)
                        props.setInfoOption("repositories")
                    }}
                >
                    REPOSITÓRIOS
                </li>
                <li 
                    className={`${props.infoOption==="contact"?"text-blue-500 scale-105 border-blue-500":"text-blue-600 border-transparent"} text-2xl font-bold tracking-widest border-b hover:border-blue-500 hover:scale-105 hover:text-blue-500 transition cursor-pointer`}
                    onClick={() => {
                        props.setMenuOpen(false)
                        props.setInfoOption("contact")
                    }}
                >
                    CONTATO
                </li>
            </ul>
        </div>
    )
}