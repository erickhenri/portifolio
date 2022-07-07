import { gql, useQuery } from "@apollo/client"
import { RepositoryButton } from "../RepositoryButton"

const GET_REPOSITORIES_QUERY = gql `
    query {
        repositories {
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

    return (
        <div className="flex flex-col items-center">
            <h1 className="mb-3 text-4xl font-normal">
                Repositórios
            </h1>
            
            <div className="w-full border-t border-blue-900 border-opacity-50 dark:border-white dark:border-opacity-50">
                {data?.repositories.map( (repository, key) => (
                    <RepositoryButton 
                    key={key}
                    slug={repository.slug}
                    />
                    ))}
            </div>
        </div>
    )
}