import { FetchSearchApi } from "@/lib/api/anime-api"
import SearchPage from "../page"

async function Page({params}){
    const keyword = params.keyword
    const response = await FetchSearchApi(keyword);
    const searchApi = response.data

    
    return(
        <div>
            <SearchPage api={searchApi} result={keyword}/>
        </div>
    )
}
export default Page