import { gql, useQuery } from "@apollo/client"
import { ArrowLeft } from "phosphor-react"
import { useParams } from "react-router-dom"
import { useGetRepositoryQuery } from "../graphql/genereted";

export function Repository() {
    const { slug } = useParams();

    const { data } = useGetRepositoryQuery({
        variables: {
            slug,
        }
    })

    return (
        <div className="flex flex-col min-h-screen">
            <button type="button" onClick={() => history.back()}>
                <ArrowLeft size={48} className="fixed left-4 top-4 p-2 bg-slate-400 dark:bg-blue-900 bg-opacity-80 rounded-full hover:bg-opacity-100 transition-opacity cursor-pointer"/>
            </button>
            

            <header className="py-8 md:py-12 w-screen bg-slate-300 dark:bg-gray-700 flex flex-col items-center gap-6 md:gap-8 shadow-xl">
                {data?.repository?.icon
                    ? <img src={data?.repository.icon.url} alt="" className="w-28 rounded-xl" />
                    : <div className="w-28 h-28 rounded-xl text-6xl font-medium bg-slate-400 flex items-center justify-center">{data?.repository?.title.substr(0,1)}</div>
                }
                <h1 className=" text-4xl font-medium">
                    {data?.repository!.title}
                </h1>
            </header>

            <div className="py-4 px-6 bg-slate-100 dark:bg-gray-800 flex-1 flex flex-col gap-4">
                <div className="flex gap-4">
                    {data?.repository!.techs.map(({icon}) => (
                        <img src={icon!.url} alt="" className="w-8"/>
                    ))}
                </div>

                <section>
                    <h2 className="mb-3 pb-1 text-xl font-medium border-b border-blue-900 border-opacity-50 dark:border-white dark:border-opacity-50">
                        Sobre
                    </h2>
                    <p>{data?.repository!.about}</p>
                </section>

                {data?.repository!.desktopSite && (
                    <section>
                        <h2 className="mb-4 pb-1 text-xl font-medium border-b border-blue-900 border-opacity-50 dark:border-white dark:border-opacity-50">
                            Versão Desktop
                        </h2>
                        <div className="flex justify-center">
                            {data.repository.desktopSite.map(({url}) => (
                                <img src={url} alt="" className="md:max-w-[50%]" />
                                ))}
                        </div>
                    </section>
                )}

                {data?.repository!.mobileSite && (
                    <section>
                        <h2 className="mb-4 pb-1 text-xl font-medium border-b border-blue-900 border-opacity-50 dark:border-white dark:border-opacity-50">
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