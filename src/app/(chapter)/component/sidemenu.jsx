"use client"
import Link from "next/link";
import { useEffect, useState } from "react"
import { CiBookmark } from "react-icons/ci"
import { IoMdArrowDropup } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function SideMenu({chapterNum, mangaInfo , chapterFeed, nextChapter, prevChapter}){
    const [menu, SetMenu] = useState(true)
    const handleMenu = () => SetMenu(!menu)

    useEffect(() =>{
      const interval =  setTimeout(() => {
        handleMenu()
        }, 5000);
        return () => clearTimeout(interval)
    }, [])
    return(
        
        <div className={` z-[9999] w-full ${menu ? "max-h-[100%]" : "max-h-[50px]"} transition-all fixed shadow-2xl bottom-0 left-0`}>
        <button className=" z-[9999] group relative" onClick={handleMenu}><IoMdArrowDropup className="absolute bottom-[-42px] left-[100%] transition-all text-8xl group-hover:text-gray-500 group-active:text-gray-800"/></button>
        <div className="flex w-full h-[150px] relative flex-col justify-center bg-gray-900 ">
            <div>
            <div className="flex w-full h-full justify-center gap-[200px]">
            <div className="h-[full] w-[120x] flex">
                {prevChapter ? <Link href={`${prevChapter}`} className="h-[full] w-full text-2xl group transition-all active:text-red-50 hover:text-gray-100 flex items-center text-gray-400"><IoIosArrowBack className="text-6xl"/><span className="">Previous Chapter</span></Link> : ''}
        
            </div>
            <div className="text-2xl items-center flex">
                Chapter {chapterNum}
            </div>
            <div className="h-[full] w-[120x] flex">
                {nextChapter ? <Link href={`${nextChapter}`} className="h-[full] w-full text-2xl flex items-center transition-all active:text-red-50 hover:text-gray-100 text-gray-400"><span className="">Next Chapter</span><IoIosArrowForward className="text-6xl"/></Link> : '' }

            </div>
            </div>
             {/* <div className="flex">
                 <span className="flex gap-1 items-center"><CiBookmark className=""/>Title</span>
             </div> */}
             <div>
                 
             </div>
         </div>
         {/* <div>
             Uploaded By
         </div>
         <div>
             Settings
         </div> */}

        </div>
     </div>
    )
}
export default SideMenu