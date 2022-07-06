import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"

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
        }
        mobileSite: {
            url: string
        }
        techs: {
            icon: {
                url: string
            }
        }

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
        <div className="flex flex-col">
            <header className="py-8 w-screen bg-gray-700 flex flex-col items-center gap-6 shadow-xl">
                <img 
                    className="w-28"
                    src={data?.repository.icon.url} 
                    alt=""
                />
                <h1 className="text-white text-4xl font-medium">
                    {data?.repository.title}
                </h1>
            </header>
            <div className="bg-gray-800 flex-1">

            </div>
        </div>
    )
}