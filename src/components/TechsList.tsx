interface TechsListProps {
    title: string,
    knowledge: string,
    icon: {
        url: string,
    }
    repositories: {
        title: string,
    }
}

export function TechsList(props: TechsListProps) {
    return (
        <button className="p-2 flex flex-col flex-1 items-center rounded shadow-[0px_0px_3px_1px_rgba(100,116,139,0.5)] hover:scale-105 transition-transform">
            <img
                className="w-8 mx-4" 
                src={props.icon.url} 
                alt="" 
            />
            <strong className="font-semibold">
                {props.title}
            </strong>

        </button>
    )
}