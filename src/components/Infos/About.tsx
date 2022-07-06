import { gql, useQuery } from "@apollo/client"
import { Tech } from "../Tech"

const GET_TECH_QUERY = gql`
    query MyQuery {
        techs {
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
interface getTechQueryResponse {
    techs: {
        title: string,
        knowledge: string,
        icon: {
            url: string
        },
        repositories: {
            title: string
        },
    }[]
}


export function About() {
    const { data } = useQuery<getTechQueryResponse>(GET_TECH_QUERY)

    return (
        <div>
            <h1 className="text-4xl font-semibold ">
                Érick Henrique
            </h1>
            <span className="block text-blue-600 text-xl mb-3">
                Programador Front-End
            </span>

            <strong className="text-blue-700 font-semibold">
                Sobre
            </strong>
            <p className="mb-3">
                Eu tenho 18 anos. Sou formado no curso de técnico em informática pelo IFMA, iniciei meus estudos de programação web em julho de 2021 e desde então sigo estudando em buscar da minha primeira oportunidade de emprego na área.
            </p>

            <strong className="text-blue-700 font-semibold">
                Linguagens e Tecnologias
            </strong>
            <div className="pt-3 flex gap-3 flex-wrap">
                {data?.techs.map((tech, key) => (
                        <Tech 
                            key={key}
                            title={tech.title}
                            knowledge={tech.knowledge}
                            icon={tech.icon}
                            repositories={tech.repositories}

                        />
                    ))}
            </div>

        </div>
    )
}