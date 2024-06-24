"use client";
import { FetchMangaChapterFeed } from "@/lib/api/anime-api";
import ChaptersList from "./chapter-list";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";


function List({chapterNum, mangaInfo , chapterFeed}) {
    const [dropDown, setDropDown] = useState(false)
    const HandleClick = () => setDropDown(!dropDown)
    console.log(chapterFeed)
  return (
    <div>
    <div className=" transition-all fixed w-full h-full z-[50] ">
      <div className=" w-[400px] m-[50px] overflow-hidden z-[1000]">
        <Link href={`/manga/${mangaInfo.id}`} className="text-3xl font-bold line-clamp-2 hover:text-gray-300 transition-all active:text-gray-600">
          {mangaInfo.attributes.title.en}
        </Link>
        <div
          className={`my-5 border-gray-200 w-[250px] rounded-md p-2 overflow-hidden transition-all border backdrop-blur-md `}
        >
          <div className="flex justify-between transition-all">
            <span className="flex gap-2">Chapter {chapterNum}</span>
            <button onClick={HandleClick}>
              <IoIosArrowDown
                className={` transition-all ${dropDown ? "" : "rotate-180"}`}
                style={{ width: "25px", height: "25px" }}
              />
            </button>
          </div>
        </div>
        <div className={`w-full backdrop-blur-lg overflow-hidden transition-all ${dropDown ? "max-h-[600px]" : "max-h-[0px]"} `}>
            {chapterFeed.map((value, index) => {
              return(
                <ChaptersList chapterNum={chapterNum} api={value} key={`Chapters-${index}`}/>
              )
            })}
        </div>
      </div>
      <div className= "z-[-1] inset-0 absolute bg-gradient-to-b from-[black] to-transparent h-[150px] "></div>
    </div>
    <div className={`z-[30] absolute w-full h-full bg-slate-900 transition-all ${dropDown ? "opacity-80":" opacity-0"}`}></div>
    </div>
  );
}
export default List;
