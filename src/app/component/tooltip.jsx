"use client"
import { GetMangaFeed } from '@/lib/api/anime-api';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { Skeleton } from '@/lib/ui/skeleton';
import { IoBookOutline } from "react-icons/io5";
import { GoArrowDownRight } from "react-icons/go";
import Link from 'next/link';
import Image from 'next/image';

const queryClient = new QueryClient()

function ToolTip({animeId}) {
    return (
      // Provide the client to your App
      <QueryClientProvider client={queryClient}>
        <FetchManga animeId={animeId}/>
      </QueryClientProvider>
    )
  }
  
function FetchManga({animeId}) {

  const { data: apiResponse , isFetching } = useQuery({
    queryKey : [`anime-${animeId}-detail`],
    queryFn  : () => GetMangaFeed(animeId),
  });

  if(isFetching){
    return(
        <div className="relative items-center">
        <SkeletonLoader />
      </div>
    )
  }

  return (
    <div className="relative items-center">
      {
        apiResponse?.data ? (
          <AnimeDetailContent currentAnimeDetail={ apiResponse.data } />
        ) : (
          <h2>
            Fail to fetch anime detail
          </h2>
        )
      }
    </div>
  );
}

function AnimeDetailContent({ currentAnimeDetail }) {
    const coverArt = currentAnimeDetail.relationships.find(
        (relationship) => relationship.type === "cover_art"
      );
  return (
    <div className="flex w-[500px] p-2 gap-2 ">
       <div className=" rounded h-full shadow-md object-cover aspect-[7/10] group object-top w-[200px] md:w-auto transition-all">
              <Image
                width={300}
                height={400}
                src={`https://mangadex.org/covers/${currentAnimeDetail.id}/${coverArt?.attributes?.fileName}`}
                className="w-full h-full rounded object-cover shadow-md"
              ></Image>
            </div>
      <div className="w-full flex-grow">
        <h3 className="text-sm line-clamp-2 mb-2 font-bold">{ currentAnimeDetail.attributes.title.en }</h3>

        <p className="text-xs text-muted-foreground line-clamp-6 drop-shadow">
            {currentAnimeDetail.attributes.description.en}
        </p>

        <AnimeDetailTable currentAnimeDetail={ currentAnimeDetail } />

        <div className="flex w-full space-x-1 items-center justify-end">
        <button className=" w-full bg-red-600 px-5 py-2 rounded-sm font-bold flex justify-center">
            <Link href={`/chapter/${currentAnimeDetail.attributes?.latestUploadedChapter}`} className='flex gap-2 content-center'>
              <IoBookOutline className="align-center text-white" style={{width: "18px", height:"18px"}}/>
              <span className=' text-white text-[12px]'>Read Now!</span>
            </Link>
          </button>

          <button className=" bg-white text-black py-2 rounded-sm font-bold flex justify-center px-2">
            <Link
              href={ `/manga/${currentAnimeDetail.id}` }
              scroll={ false }
            >
              <GoArrowDownRight className="align-center text-black" style={{width: "18px", height:"18px"}} />
            </Link>
          </button>
        </div>
      </div>

    </div>
  );
}

function AnimeDetailTable({ currentAnimeDetail }) {
    const CreatedAt = currentAnimeDetail?.attributes?.createdAt.split("-")[0]

    const titleString = currentAnimeDetail.attributes.altTitles
    .map((obj) => Object.values(obj)[0])
    .join(", ");
    return (
      <table className="text-xs w-full text-left my-3">
        <tbody>
          {
            currentAnimeDetail.otherName && (
              <tr>
                <th className="align-text-top whitespace-nowrap pr-2" scope="row">
                  {titleString || currentAnimeDetail?.attributes?.title.en }
                </th>
                <td className="line-clamp-4">{ currentAnimeDetail?.attributes?.updatedAt }</td>
              </tr>
            )
          }
  
          <tr>
            <th className="align-text-top whitespace-nowrap pr-2" scope="row">
              Release Date
            </th>
            <td>{CreatedAt}</td>
          </tr>
  
          <tr>
            <th className="align-text-top whitespace-nowrap pr-2" scope="row">
              Type
            </th>
            <td>{ `${currentAnimeDetail.type.charAt(0).toUpperCase()}${currentAnimeDetail.type.slice(1)}` }</td>
          </tr>
  
          <tr>
            <th className="align-text-top whitespace-nowrap pr-2" scope="row">
              Status
            </th>
            <td>{ `${currentAnimeDetail?.attributes?.status.charAt(0).toUpperCase()}${currentAnimeDetail?.attributes?.status.slice(1)}` }</td>
          </tr>
  
          <tr>
            <th className="align-text-top whitespace-nowrap pr-2" scope="row">
              Genres
            </th>
            {/* <td>{ currentAnimeDetail.genres.join(', ') }</td> */}
          </tr>
        </tbody>
      </table>
    );
  }
  
function SkeletonLoader() {
    return (
    <div className="flex w-full items-center opacity-50 overflow-hidden rounded-md  p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg">
      <div className="mr-2 h-40 w-40 rounded-lg bg-neutral-600"></div>
      <div className="w-full">
        <div className="h-3 w-40 rounded-full bg-neutral-600"></div>
        <div className="my-1 flex space-x-1">
          <div className="h-3 w-8 rounded-full bg-neutral-600 shadow"></div>
          <div className="h-3 w-8 rounded-full bg-neutral-600 shadow"></div>
          <div className="h-3 w-8 rounded-full bg-neutral-600 shadow"></div>
          <div className="h-3 w-8 rounded-full bg-neutral-600 shadow"></div>
        </div>
        <div className="space-y-1">
          <div className="my-1 h-3 w-full rounded-full bg-neutral-600"></div>
          <div className="my-1 h-3 w-full rounded-full bg-neutral-600"></div>
          <div className=" my-1 h-3 w-full rounded-full bg-neutral-600"></div>
          <div className=" my-1 h-3 w-full rounded-full bg-neutral-600"></div>
        </div>
        <div className="mt-10 h-5 w-full"></div>
      </div>
    </div>
    );
  }


export default ToolTip
