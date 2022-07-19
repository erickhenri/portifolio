import { ArrowLeft, Link } from "phosphor-react"
import { useParams } from "react-router-dom"
import { useGetRepositoryQuery } from "@/graphql/genereted";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, Scrollbar } from "swiper";

import Loading from "@/assets/loading.gif";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Repository() {
    const { slug } = useParams();

    const { data } = useGetRepositoryQuery({
        variables: {
            slug,
        }
    })
    const mediaWidthMd = matchMedia("(max-width: 768px").matches;


    if(!data?.repository) {
        return (
            <div className="w-screen h-screen flex items-center justify-center dark:bg-gray-700">
            <img src={Loading} alt="" className="w-24"/>
        </div>
        )
    }   

    return (
        <div className="flex flex-col min-h-screen">
            <button type="button" onClick={() => history.back()}>
                <ArrowLeft size={48} className="fixed z-50 left-4 top-4 p-2 bg-slate-400 dark:bg-blue-900 bg-opacity-80 rounded-full hover:bg-opacity-100 transition-opacity cursor-pointer"/>
            </button>
            

            <header className="py-8 md:py-12 w-full bg-slate-300 dark:bg-gray-700 flex flex-col items-center gap-6 md:gap-8 shadow-xl">
                {data?.repository?.icon
                    ? <img src={data.repository.icon.url} alt="" className="w-28 rounded-xl" />
                    : <div className="w-28 h-28 rounded-xl text-6xl font-medium bg-slate-400 flex items-center justify-center">{data?.repository?.title.substr(0,1)}</div>
                }
                <h1 className=" text-4xl font-medium">
                    {data?.repository!.title}
                </h1>
            </header>

            <div className="py-4 px-6 bg-slate-100 dark:bg-gray-800 flex-1 flex flex-col gap-4">
                <div className="flex gap-4">
                    {data.repository.techs.map(({icon}) => (
                        <img src={icon.url} alt="" className="w-8"/>
                    ))}
                </div>

                <section className="flex flex-col gap-3">
                    <h2 className="pb-1 text-xl font-medium border-b border-blue-900 border-opacity-50 dark:border-white dark:border-opacity-50">
                        Sobre
                    </h2>
                    {data.repository.about.githubLink && (
                        <span className="flex items-center">
                            Github: 
                            <Link className="min-w-[1.25rem] min-h-[1.5rem]"/>
                            <a 
                                className="text-blue-600 hover:underline hover:underline-offset-1 truncate"
                                href={data.repository.about.githubLink}
                                target="_blank"
                            >
                                {data.repository.about.githubLink}
                            </a>
                        </span>
                    )}
                    {data.repository.about.siteLink && (
                        <span className="flex items-center">
                            Site: 
                            <Link className="min-w-[1.25rem] min-h-[1.5rem]"/>
                            <a 
                                className="text-blue-600 hover:underline hover:underline-offset-1 truncate"
                                href={data.repository.about.siteLink}
                                target="_blank"
                            >
                                {data.repository.about.siteLink}
                            </a>
                        </span>
                    )}
                    <p>{data.repository.about.description}</p>
                </section>
                {data.repository.desktopSite.length !== 0 && (
                    <section>
                        <h2 className="mb-4 pb-1 text-xl font-medium border-b border-blue-900 border-opacity-50 dark:border-white dark:border-opacity-50">
                            Versão Desktop
                        </h2>
                        <div className="flex justify-center">
                            <Swiper
                                className="w-full"    
                                modules={[Navigation, Pagination, Scrollbar]}
                                navigation={mediaWidthMd ? false : true}
                                pagination={{ clickable: true }}
                            >
                                {data.repository.desktopSite.map(({url}) => (
                                    <SwiperSlide className="w-screen flex justify-center">
                                        <img src={url} alt="" className="md:w-4/5" />
                                    </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </section>
                )}

                {data.repository.mobileSite.length !== 0 && (
                    <section>
                        <h2 className="mb-4 pb-1 text-xl font-medium border-b border-blue-900 border-opacity-50 dark:border-white dark:border-opacity-50">
                            Versão Mobile
                        </h2>
                        <div className="flex justify-center">
                            <Swiper 
                                className="w-full"
                                modules={[Navigation, Pagination, Scrollbar]}
                                navigation={mediaWidthMd ? false : true}
                                pagination={{ clickable: true }}
                            >
                                {data.repository.mobileSite.map(({url}) => (
                                    <SwiperSlide className="flex justify-center">
                                        <img src={url} alt="" className="w-4/5 md:w-1/4"/>
                                    </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}