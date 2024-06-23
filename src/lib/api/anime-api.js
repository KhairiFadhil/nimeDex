"use server"
import { FaSleigh } from "react-icons/fa";
import FetchApi from "./fetch-api";


export async function FetchChapterImage(id){
  const response = await FetchApi(`at-home/server/${id}`, {
    method : 'GET',
    next : {
      revalidate : 1800
    }
  })
  if (response.data && response.data.length === 0){
    return{
      ...response,
      isError : true,
      isSuccess : false,
      error : "Failed to fetch chapter Image"
    }}

    return response.data

}
export async function FetchMangaChapterFeed(id){
  const params = {
    limit : 50,
    'order[chapter]' : 'desc'
  }
  const response =await FetchApi(`manga/${id}/feed`,
    {
      method : 'GET',
      params : params,
      next : {
        revalidate : 1800
      }
    }
  )
  return response.data
}

export async function FetchPopularAnime(){
  const today = new Date()
  const oneMonthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
  const createdAtSince = oneMonthAgo.toISOString().split('.')[0];

  const params = {
    limit : 10,
    includes: ['author', 'artist', 'cover_art'],
    'order[followedCount]': "desc",
    createdAtSince : createdAtSince
    }
  const response = await FetchApi(`manga`, {
    method : 'GET',
    params : params,
    next : {
      revalidate: 1800,
    }
  })
  if (response.data && response.data.length === 0){
    return{
      ...response,
      isError : true,
      isSuccess : false,
      error : "Failed to fetch manga"
    }}

    return response.data
}

export async function GetMangaFeed(id){
  const params = {
    limit : null,
    includes: ['author', 'artist', 'cover_art']
  }
  const response = await FetchApi(`manga/${id}`, {
    method: 'GET',
    params: params,
    next: {
            revalidate: 1800,
          },
   });
   if (response.data && response.data.length === 0){
    return{
      ...response,
      isError : true,
      isSuccess : false,
      error : "Failed to fetch manga"
    }}
   
  return response.data
}

export async function FetchMangaApi(page){

  const params = {
    limit: 20,
    offset: 20 * (page - 1),
    includes: ['author', 'artist', 'cover_art']
  }
 const response = await FetchApi(`manga`, {
  method: 'GET',
  params: params,
  next: {
          revalidate: 1800,
        },
 });
 if (response.data && response.data.length === 0){
  return{
    ...response,
    isError : true,
    isSuccess : false,
    error : "Failed to fetch manga"
  }}

  return response.data
}

export async function FetchTopAiring(){
  const today = new Date()
  const onedayAgo = new Date(today.getTime() - 1 * 24 * 60 * 60 * 1000);
  const createdAtSince = onedayAgo.toISOString().split('.')[0];
  const params = {
    limit: 5,
    includes: ['author', 'artist', 'cover_art'],
    'order[relevance]': "desc",
    createdAtSince: createdAtSince
  }
  const response = await FetchApi('manga',{
    method: 'GET',
    params: params,
    next : {
      revalidate : 1800,
    },
  })
  if (response.data && response.data.length === 0){
    return{
      ...response,
      isError : true,
      isSuccess : false,
      error : "Failed to fetch manga"
    }}
    return response.data
}

export async function FetchSearchApi(search){
  const params = {
    title: search,
    limit : 25,
    includes: ['author', 'artist', 'cover_art'], 
  }
  const response = await FetchApi('manga', {
    method: 'GET',
    params: params,
    next : {
      revalidate : 1800,
    },
  });
  if (response.data && response.data.length === 0){
    return{
      ...response,
      isError : true,
      isSuccess : false,
      error : "Failed to fetch manga"
    }}
    return response.data
}
  
// export async function fetchRecentEpisodes({ pageNumber = 1 }) {
//   const params = {
//     page: pageNumber.toString(),
//   };

//   const queryString = new URLSearchParams(params).toString();
//   const response = await FetchApi({
//     endpoint: `anime/gogoanime/recent-episodes?${queryString}`,
//     method: 'GET',
//     next: {
//       revalidate: 1800,
//     },
//   });

//   if (response.data && response.data.results.length === 0) {
//     return {
//       ...response,
//       isError: true,
//       isSuccess: false,
//       error: 'Failed to fetch recent episodes',
//     };
//   }

//   return response;
// }

// export async function searchAnime(pageNumber = 1, searchQuery) {
//   const params = {
//     page: pageNumber.toString(),
//   };
//   const queryString = new URLSearchParams(params).toString();
//   const url = `anime/gogoanime/${encodeURIComponent(searchQuery)}?${queryString}`;
//   const response = await FetchApi(url, {
//     method: 'GET'
//   });

//   const responseData = await response.json();
//   if (responseData.data && responseData.data.result === 0) {
//     return {
//       isError: true,
//       isSuccess: false,
//       error: "Can't find the anime you are looking for"
//     };
//   }

//   return responseData;
// }

// export async function fetchAnimeDetails(animeId) {
//   const url = `anime/gogoanime/info/${animeId}`;
//   const response = await FetchApi(url, {
//     method: 'GET'
//   });

//   return response.json();
// }

// export async function fetchAnimeEpisodeOtherStreamingService(episodeId) {
//   const url = `/anime/gogoanime/watch/${episodeId}?server={serverName}`;
//   const response = await FetchApi(url, { method: 'GET' });
//   return response.json();
// }

// export async function fetchTopAiringAnimeList(pageNumber = 1) {
//   const params = {
//     page: pageNumber.toString()
//   };
//   const queryString = new URLSearchParams(params).toString();
//   const url = `anime/gogoanime/top-airing?${queryString}`;
//   const response = await FetchApi(url, {
//     method: "GET",
//   });
//   return response;
// }

// export async function fetchAnimeMovieList(pageNumber = 1) {
//   const params = {
//     page: pageNumber.toString()
//   };
//   const queryString = new URLSearchParams(params).toString();
//   const url = `anime/gogoanime/movies?${queryString}`;
//   const response = await FetchApi(url, { method: 'GET' });

//   return response.json();
// }

// export async function fetchAnimePopularList(pageNumber = 1) {
//   const params = {
//     page: pageNumber.toString()
//   };
//   const queryString = new URLSearchParams(params).toString();
//   const url = `anime/gogoanime/popular?${queryString}`;
//   const response = await FetchApi(url, { method: 'GET' });

//   return response;
// }

// export async function fetchCarouselAnime() {
//   const firstPagePopular = await fetchAnimePopularList({ pageNumber: 1 });
//   const { isError, isSuccess, data } = firstPagePopular;
//   if (isError) {
//     return {
//       isSuccess: false,
//       isError: true,
//       data: [],
//       error: `Failed to fetch anime list`
//     };
//   }

//   const { results: popularAnimeList } = data ?? {};

//   const animeIdUrls = popularAnimeList ? popularAnimeList.map(anime => anime.id) : [];

//   const fetchPopularAnimeDetails = animeIdUrls.map((animeId) => fetchAnimeDetails(animeId)
//     .then((response) => {
//       const {
//         isError: isCurrentAnimeError,
//         data: currentAnimeDetails
//       } = response ?? {};
//       if (isCurrentAnimeError) {
//         throw new Error(`Failed to fetch details for ID ${animeId}`);
//       }
//       if (currentAnimeDetails) {
//         return currentAnimeDetails;
//       }
//       return null;
//     })
//     .catch(() => null)
//   );
//   const popularAnimeDetails = await Promise.all(fetchPopularAnimeDetails);

//   return {
//     isSuccess: true,
//     isError: false,
//     data: popularAnimeDetails.filter((detail) => detail !== null)
//   };
// }
