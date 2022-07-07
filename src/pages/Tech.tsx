import { gql, useQuery } from "@apollo/client"
import { ArrowLeft } from "phosphor-react"
import { Link, useParams } from "react-router-dom"
import { RepositoryButton } from "../components/RepositoryButton"

const GET_TECH_QUERY = gql `
query ($slug: String) {
  tech(where: {slug: $slug}) {
    title
    knowledge
    icon {
        url
    }
    repositories {
        slug
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
            slug: string
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
            <button type="button" onClick={() => history.back()}>
                <ArrowLeft className="fixed left-4 top-4 w-8 h-8 md:w-12 md:h-12 p-1 md:p-2 bg-blue-900 bg-opacity-80 rounded-full hover:bg-opacity-100 transition-opacity cursor-pointer"/>
            </button>            

            <header className="py-8 w-screen bg-gray-700 flex flex-col items-center gap-6 shadow-xl">
                <img src={data?.tech.icon.url} alt="" className="w-28 rounded-xl" />
                <h1 className=" text-4xl font-medium">
                    {data?.tech.title}
                </h1>
            </header>

            <div className="py-4 px-6 bg-gray-800 flex-1 flex flex-col md:flex-row gap-4">
                <section className="md:flex-1">
                    <h2 className="mb-3 text-2xl font-medium">
                        Conhecimentos
                    </h2>
                    <p>{data?.tech.knowledge}</p>
                </section>
                <div className="h-[1px] md:h-auto md:w-[1px] bg-white bg-opacity-50"></div>
                <section className="md:flex-1">
                    <h2 className="mb-3 text-2xl font-medium">
                        Repositórios
                        <div className="">
                            {data?.tech.repositories.map((repository, key) => (
                                <RepositoryButton 
                                key={key}
                                    title={repository.title}
                                    slug={repository.slug}
                                />
                            ))
                            }
                        </div>
                    </h2>
                </section>
            </div>
        </div>
    )
}