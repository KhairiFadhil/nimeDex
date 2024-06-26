"use client"
import { FaMagnifyingGlass } from "react-icons/fa6"
import AnimeCard from "@/app/component/card";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Image from "next/image";

function SearchPage({api, result}){
    const searchRef = useRef()
    const router = useRouter()
    const HandleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value
        router.push(`/search/${keyword}`)
    }
    return (
        <div className="w-full h-full relative block">
            <div className="w-full h-full max-w-[1440px] mx-auto p-[75px]">
                <form className="content-center relative">
                    <button onClick={HandleSearch} className="flex absolute z-20 right-3 bottom-[6px]"  ><FaMagnifyingGlass/></button>
                    <input className="w-full h-7 px-2 input-search placeholder:px-2 backdrop-blur-md" type="text" placeholder="Search" ref={searchRef}></input>
                 </form>
                 <div className="m-2">
                    <h1>Search result... <span className=" underline text-red-600 font-bold">{result || 'does not exist'}</span></h1>
                 </div>
                 <div className="relative grid gap-2 manga-card-cover-only grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 ">
                 {api ? api.map((anime, index) => {
                  const coverArt = anime.relationships.find(relationship => relationship.type === 'cover_art');
                  if (coverArt) {

                      return (
                          <AnimeCard
                              key={`Top-manga${index}`}
                              img={coverArt?.attributes?.fileName}
                              api={anime}
                          />
                      );
                  }
              }) : 
              <div className="w-full h-full absolute">
                <Image
                className="m-auto"
                width={300}
                height={300}
                src='/images/FB_IMG_1718203172483.jpg'
                />
              </div>
              }
                </div>
            </div>
        </div>
    )
        
}
export default SearchPage