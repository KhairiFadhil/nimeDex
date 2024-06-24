import { FetchChapterImage, FetchMangaChapter, FetchMangaChapterFeed } from "@/lib/api/anime-api";
import MangaPage from "../../component/mangapage";
import SideMenu from "../../component/sidemenu";
import List from "../../component/list";

async function Page({ params }) {
  const id = params.keyword;
  const response = await FetchChapterImage(id);

    if (!response) {
      throw new Error(error || 'An unexpected error occured')
    }

  const mangaResponse = await FetchMangaChapter(id)
  const responseManga = mangaResponse?.data


  if(!responseManga) {
    throw new Error(error || 'Failed to fetch chapter')
  }

  const MangaData = responseManga?.relationships?.find(relationship => relationship.type === 'manga');
  const responseChapterFeed = await FetchMangaChapterFeed(MangaData.id, responseManga.attributes.translatedLanguage);
  const chapterFeed = responseChapterFeed?.data;
  
  // if (chapterFeed){
  //   const index = chapterFeed.findIndex(
  //     (chapter) => chapter.id === MangaData.id
  //   );
  //   console.log(index)
  // let prevChapterNumber;
  //     for (let i = index; i < chapterFeed.length; i += 1) {
  //       if (responseManga?.attributes?.chapter !== chapterFeed[i]?.attributes?.chapter) {
  //         prevChapterNumber = chapterFeed[i].chapter;
  //         break;
  //       }
  //     }
  // }

  // const nextChapter = chapterFeed?.find((data) => data.attributes.chapter = Number(responseManga.attributes.chapter) + 1)?.id;
  // const prevChapter = chapterFeed?.find((data) => data.attributes.chapter = Number(responseManga.attributes.chapter) - 1)?.id;

  return (
    <div className="w-full h-full relative block">
      <List 
      chapterNum={responseManga?.attributes?.chapter} 
      mangaInfo={MangaData} 
      chapterFeed={chapterFeed}/>
      <SideMenu
      chapterNum={responseManga?.attributes?.chapter} 
      mangaInfo={MangaData} 
      nextChapter=""
      prevChapter=""
       />
      <div className="w-full h-full relative block z-10">
        <div className="w-full h-full max-w-[1440px] mx-auto bg-slate-200">
          <MangaPage api={response}
          chapterFeed={chapterFeed} />
        </div>
      </div>
      <div>
        <button className="w-full h-[70px] bg-red-700 hover:bg-red-600 active:bg-red-400 transition-all">
          {" "}
          Next Chapter{" "}
        </button>
      </div>
    </div>
  );
}

export default Page;
