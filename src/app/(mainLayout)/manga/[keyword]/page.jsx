import { GetMangaFeed } from "@/lib/api/anime-api"
import MangaPage from "../mangaMenu"

async function Page( {params} ){
    const id = params.keyword
    const response = await GetMangaFeed(id)
    const mangaApi = response.data

    return(
        <div>
            <MangaPage anime={mangaApi}/>
        </div>
    )
}

export default Page