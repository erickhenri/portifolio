interface techProps {
    title: string,
    knowledge: string,
    icon: {
        url: string,
    }
    repositories: {
        title: string,
    }
}

export function Tech(props: techProps) {
    return (
        <div className="">
            <button>
                <img
                    className="w-8" 
                    src={props.icon.url} 
                    alt="" />
            </button>
        </div>
    )
}