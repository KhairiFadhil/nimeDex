import Link from "next/link";
import AnimeCard from "../../component/card";
import { FetchMangaApi, FetchTopAiring } from "@/lib/api/anime-api";
import LoadMore from "@/app/component/loadmore";


async function AnimeLatestRelease() {
  const response = await FetchMangaApi(1);
  const recentManga = response.data;
  // console.log(recentManga)
  const responseTop = await FetchTopAiring()
  const TopManga = responseTop.data
  // console.log(TopManga)

  return (
    <div className="relative flex mx-auto max-w-[1440px] justify-between">
      <div className="flex flex-col relative w-fit h-full">
        <div className="flex justify-between my-5">
          <h1 className=" font-bold text-3xl">Recent Episodes</h1>
          <button type="button" className="">
            View More
          </button>
        </div>
        <div className="flex relative flex-col">
          <section className="grid gap-2 manga-card-cover-only grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 ">
            {recentManga.map((anime, index) => {
                const coverArt = anime.relationships.find(relationship => relationship.type === 'cover_art');
                if (coverArt) {

                    return (
                        <AnimeCard
                            key={`recent-manga${index}`}
                            img={coverArt?.attributes?.fileName}
                            api={anime}
                        />
                    );
                }
            })}
          </section>
          <LoadMore/>
        </div>
      </div>
      <div className="relative content-center w-fit h-full hidden lg:block">
        <div className="flex justify-center my-5 ">
          <h1 className=" font-bold text-3xl">Top Airing</h1>
        </div>
          <div className=" flex flex-shrink-0 flex-col gap-2">
            {TopManga.map((anime, index) => {
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
              })}
            

          </div>
      </div>
    </div>
  );
}
export default AnimeLatestRelease;

