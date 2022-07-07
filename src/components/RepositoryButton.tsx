import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_REPOSITORY_QUERY = gql `
    query ($slug: String) {
        repository(where: {slug: $slug}) {
            title
            techs {
                title
            }
        }
    }
`

interface RepositoryQueryProps {
    repository: {
        title: string
        techs: {
            title: string
        }[]
    }
}

interface RepositoryButtonProps {
    slug: string
}

export function RepositoryButton(props: RepositoryButtonProps) {
    const { data } = useQuery<RepositoryQueryProps>(GET_REPOSITORY_QUERY, {
        variables: {
            slug: props.slug
        }
    })

    return (
        <Link to={`/repositories/${props.slug}`} className="group py-4 w-full flex flex-col gap-2 border-b border-blue-900 border-opacity-50 dark:border-white dark:border-opacity-50">
                <h2 className="text-lg font-semibold group-hover:text-blue-500 group-hover:underline group-hover:underline-offset-2">
                    {data?.repository.title}
                </h2>

                <span className="text-xs">
                    {data?.repository.techs.map((tech) => (
                        tech.title+" | "
                    ))}
                </span>
        </Link>
    )
}