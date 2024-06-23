import { FetchChapterImage } from "@/lib/api/anime-api"
import MangaPage from "../../mangapage"
import SideMenu from "../../sidemenu";

async function Page({params}){
    const id = params.keyword
    const response = await FetchChapterImage(id)
    // const responseData = response.chapter
    // console.log(response.chapter)

    
    return(
        <div className="">
            <SideMenu/>
            <div className="w-full h-full relative block">
            <div className="w-full h-full max-w-[1440px] mx-auto bg-slate-200">
                <MangaPage api={response}/>
            </div>
             </div>
             <div>
                <button className="w-full h-[70px] bg-red-700 hover:bg-red-600 active:bg-red-400 transition-all"> Next Chapter </button>
            </div>
        </div>
    
    )
}

export default Page