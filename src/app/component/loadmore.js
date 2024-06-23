"use client"
import { FetchMangaApi } from "@/lib/api/anime-api";
import Image from "next/image"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"
import AnimeCard from "./card";

let page = 2
function LoadMore(){
    const [ref, inView] = useInView();
    const [data, setData] = useState([])
    useEffect(() => {
        if(inView){
            FetchMangaApi(page).then((res) => {
                setData([...data , ...res.data]);
                page++
            })
        }
    }, [inView, data])

    return(
        <>
        <section className="grid gap-2 manga-card-cover-only grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 ">
            {data.map((anime, index) => {
                const coverArt = anime.relationships.find(relationship => relationship.type === 'cover_art');
                if (coverArt) {

                    return (
                        <AnimeCard
                            key={`recent-manga${index}`}
                            title={anime.attributes.title.en}
                            img={coverArt?.attributes?.fileName}
                            id={anime.id}
                        />
                    );
                }
            })}
          </section>
        <section >
            <div className="" ref={ref}>
                <span className="flex  justify-center text-[10px] border my-5 py-2 px-4 rounded-sm bg-slate-900 backdrop-blur-md">
                    Loading...
                </span>
            </div>   

        </section>
        </>
    )
}
export default LoadMore