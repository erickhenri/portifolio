import { gql, useQuery } from "@apollo/client"
import { Link } from "react-router-dom"

const GET_SLUG_REPOSITORIES = gql `
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
    const { data } = useQuery<RepositoriesProps>(GET_SLUG_REPOSITORIES)
    console.log(data)

    return (
        <div className=" flex flex-col items-center">
            <h1 className="text-4xl font-normal">
                Repositórios
            </h1>

            {data?.repositories.map( (repository) => (
                <div className="">
                    <Link to={repository.slug}>
                        {repository.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}