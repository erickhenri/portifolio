import { gql, useQuery } from "@apollo/client"
import { ArrowLeft } from "phosphor-react"
import { Link, useParams } from "react-router-dom"

const GET_REPOSITORY_QUERY = gql `
    query ($slug: String) {
        repository(where: {slug: $slug}) {
            title
            slug
            about
            icon {
                url
            }
            desktopSite {
                url
            }
            mobileSite {
                url
            }
            techs {
                icon {
                    url
                }
            }
        }
    }  
`

interface RepositoryQuery {
    repository: {
        title: string
        slug: string
        about: string
        icon: {
            url: string
        }
        desktopSite: {
            url: string
        }[]
        mobileSite: {
            url: string
        }[]
        techs: {
            icon: {
                url: string
            }
        }[]

    }
}

export function Repository() {
    const { slug } = useParams();

    const { data } = useQuery<RepositoryQuery>(GET_REPOSITORY_QUERY, {
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
                <img src={data?.repository.icon.url} alt="" className="w-28 rounded-xl" />
                <h1 className=" text-4xl font-medium">
                    {data?.repository.title}
                </h1>
            </header>

            <div className="py-4 px-6 bg-gray-800 flex-1 flex flex-col gap-4">
                <div className="flex gap-4">
                    {data?.repository.techs.map(({icon}) => (
                        <img src={icon.url} alt="" className="w-8"/>
                    ))}
                </div>
                
                <section>
                    <h2 className="mb-3 pb-1 text-xl font-medium border-b border-white border-opacity-50">
                        Sobre
                    </h2>
                    <p>{data?.repository.about}</p>
                </section>

                {data?.repository.desktopSite && (
                    <section>
                        <h2 className="mb-4 pb-1 text-xl font-medium border-b border-white border-opacity-50">
                            Versão Desktop
                        </h2>
                        <div className="flex justify-center">
                            {data.repository.desktopSite.map(({url}) => (
                                <img src={url} alt="" className="md:max-w-[50%]" />
                                ))}
                        </div>
                    </section>
                )}

                {data?.repository.mobileSite && (
                    <section>
                        <h2 className="mb-4 pb-1 text-xl font-medium border-b border-white border-opacity-50">
                            Versão Mobile
                        </h2>
                        <div className="flex justify-center">
                            {data.repository.mobileSite.map(({url}) => (
                                <img src={url} alt=""/>
                                ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}