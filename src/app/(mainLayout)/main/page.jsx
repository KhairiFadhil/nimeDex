
import { FetchPopularAnime } from "@/lib/api/anime-api"
import AnimeLatestRelease from "./animeLatestRelease"
import CarouselList from "./carousel-list"

async function MainPage(){
    const responseTop = await FetchPopularAnime();
    const topManga = await responseTop.data;
    
    return(
        <div className="relative fixed w-full">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="absolute z-20 top-[75px]">
                    <h1 className=" font-semibold text-white text-2xl">Popular Shows</h1>
                </div>
            </div>
            <section>
                <CarouselList animeData={topManga}/>
            </section>
            <section>
                 <AnimeLatestRelease/>
            </section>

            
        </div>
    )
}

export default MainPage