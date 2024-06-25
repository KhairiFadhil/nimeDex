import FetchApi from "@/lib/api/fetch-api"
import DropDownChapter from "./dropdown-chapter"
import { FetchMangaChapterFeed } from "@/lib/api/anime-api"

async function ListChapter({id}){
const response = await FetchMangaChapterFeed(id, '')
const responseData = response.data
// console.log(response)

const SameChapter = responseData.reduce((acc, value) => {
    const key = value.attributes.chapter
    if(!acc[key]){
        acc[key] = [];
    }
    acc[key].push(value);
    return acc; 
}, {});

console.log()
responseData.filter(
    (data) => data.attributes.chapter === "1"
  );

return(
    <div className=" w-full h-full flex gap-2 flex-col">
        {Object.entries(SameChapter).map((value, index) => {
            return (
                <DropDownChapter api={value} key={`chapterDrop_${index}`}/>
            )
        })
        }
     </div>
)
}
export default ListChapter