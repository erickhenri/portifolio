import { gql, useQuery } from "@apollo/client"
import { RepositoryButton } from "../RepositoryButton"

const GET_REPOSITORIES_QUERY = gql `
    query {
        repositories {
            title
            slug
        }
    }  
`

interface RepositoriesProps {
    repositories: {
        title: string
        slug: string
    }[]
}

export function Repositories() {
    const { data } = useQuery<RepositoriesProps>(GET_REPOSITORIES_QUERY)
    console.log(data)

    return (
        <div className=" flex flex-col items-center">
            <h1 className="text-4xl font-normal">
                Repositórios
            </h1>

            {data?.repositories.map( (repository, key) => (
                <RepositoryButton 
                    slug={repository.slug}
                    title={repository.title}
                />
            ))}
        </div>
    )
}