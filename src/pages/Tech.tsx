import { gql, useQuery } from "@apollo/client"
import { ArrowLeft } from "phosphor-react"
import { Link, useParams } from "react-router-dom"

const GET_TECH_QUERY = gql `
query ($slug: String) {
  tech(where: {slug: $slug}) {
    title
    knowledge
    icon {
      url
    }
    repositories {
      title
    }
  }
}

`

interface TechQuery {
    tech: {
        title: string
        knowledge: string
        icon: {
            url: string
        }
        repositories: {
            title: string
        }[]
    }
}

export function Tech() {
    const { slug } = useParams();

    const { data } = useQuery<TechQuery>(GET_TECH_QUERY, {
        variables: {
            slug,
        }
    })

    return (
        <div className="flex flex-col min-h-screen text-white">
            <Link to={"/repositories"}>
                <ArrowLeft size={48} className="fixed left-4 top-4 p-2 bg-blue-900 bg-opacity-80 rounded-full hover:bg-opacity-100 transition-opacity cursor-pointer"/>
            </Link>

            <header className="py-8 w-screen bg-gray-700 flex flex-col items-center gap-6 shadow-xl">
                <img src={data?.tech.icon.url} alt="" className="w-28 rounded-xl" />
                <h1 className=" text-4xl font-medium">
                    {data?.tech.title}
                </h1>
            </header>

            <div className="py-4 px-6 bg-gray-800 flex-1 flex flex-col gap-4">
                    <section>
                        <h2 className="mb-3 pb-1 text-xl font-medium border-b border-white border-opacity-50">
                            Sobre
                        </h2>
                        <p>{data?.tech.knowledge}</p>
                    </section>
            </div>
        </div>
    )
}