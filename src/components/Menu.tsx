interface menuProps {
    openMenu: () => void
    menuOpen: boolean
}

export function Menu(props: menuProps) {
    return (
        <div className={`${props.menuOpen?"-translate-y-0":"-translate-y-full"} fixed text-center h-screen w-screen bg-white flex flex-col items-center justify-center transition-transform`}>
            <ul className="flex flex-col gap-4">
                <li 
                    className="text-blue-600 text-2xl font-bold tracking-widest hover:scale-105 hover:text-blue-500 transition cursor-pointer"
                    onClick={props.openMenu}
                >
                    SOBRE
                </li>
                <li 
                    className="text-blue-600 text-2xl font-bold tracking-widest hover:scale-105 hover:text-blue-500 transition cursor-pointer"
                    onClick={props.openMenu}
                >
                    REPOSITÓRIOS
                </li>
                <li 
                    className="text-blue-600 text-2xl font-bold tracking-widest hover:scale-105 hover:text-blue-500 transition cursor-pointer"
                    onClick={props.openMenu}
                >
                    CONTATO
                </li>
            </ul>
        </div>
    )
}