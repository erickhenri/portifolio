import { Link } from "react-router-dom"
import { useGetTechsQuery } from "@/graphql/genereted"
import { Image } from "phosphor-react"

export function TechsList() {
    const { data } = useGetTechsQuery()

    return (
        <div className="pt-3 flex gap-3 flex-wrap">
            {data?.techs.map((tech, key) => (
                <Link 
                    className="p-2 flex flex-col flex-auto items-center rounded shadow-[0px_0px_3px_1px_rgba(100,116,139,0.5)] hover:scale-105 transition-transform"
                    to={`/about/tech/${tech.slug}`} 
                    key={key} 
                >
                    {tech.icon 
                        ? <img src={tech.icon.url} alt="" className="w-8 mx-2"/>
                        : <Image size={32} className="mx-2"/>
                    }
                    <strong className="font-semibold">
                        {tech.title}
                    </strong>
                </Link>
            ))
            }

        </div>
    )
}