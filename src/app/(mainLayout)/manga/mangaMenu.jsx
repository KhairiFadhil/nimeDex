import Image from "next/image";
import { IoBookOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import Link from "next/link";

import ListChapter from "./chapter-list";



function MangaPage({ anime }) {
  const coverArt = anime.relationships.find(
    (relationship) => relationship.type === "cover_art"
  );
  const findAuthor = anime.relationships.filter(
    (relationship) => relationship.type === "author"
  );
  const findArtist = anime.relationships.filter(
    (relationship) => relationship.type === "artist"
  );

  const titleString = anime.attributes.altTitles
    .map((obj) => Object.values(obj)[0])
    .join(", ");

  return (
    <div className={"block flex-shrink-0 w-full h-full"}>
      <div
        className="flex relative h-full overflow-hidden"
        style={{ height: "400px" }}
      >
        <img
          className="absolute left-0 top-0 w-[100%] h-[150%] object-cover select-none"
          src={`https://mangadex.org/covers/${anime.id}/${coverArt?.attributes?.fileName}`}
          style={{ objectPosition: "0px 30%" }}
        ></img>
        <div className=" inset-0 absolute bg-gradient-to-t from-[black] to-transparent"></div>
      </div>

      <div className=" mb-6 md:mb-0 md:py-4 grid md:grid-rows-1 gap-2 md:h-[77%] sm:h-[65%] h-[70%] mt-auto xl:max-w-[1440px] w-auto mx-auto">
        <div className="h-[300px] absolute z-20 flex gap-4 top-[100px] overflow-hidden">
          <div className="rounded h-[full]] shadow-md object-cover aspect-[7/10] group object-top">
            <Image
                width={300}
                height={400}
              src={`https://mangadex.org/covers/${anime.id}/${coverArt?.attributes?.fileName}`}
              className="w-full h-full rounded object-cover shadow-md"
            ></Image>
          </div>
          <div
            className="grid mt-auto min-h-0 gap 6 h-full max-w-[1440px]"
            style={{
              minHeight: "0px",
              gridTemplateRows:
                "max-content auto min-content min-content min-content",
            }}
          >
            <h2
              className="text-4xl font-bold line-clamp-1"
              style={{ lineHeight: "2.75rem" }}
            >
              {anime?.attributes.title.en}
            </h2>
            <h4 className="">{titleString || anime.attributes.title.en}</h4>
            <div className="flex gap-2">
              <button className="button-menu bg-white text-black font-bold flex items-center gap-2 type1">
                <span>
                  <CiBookmark />
                </span>
                Add To Library
              </button>
              <button className="button-menu bg-white text-black font-bold flex items-center gap-2 type1">
                <span>
                  <IoBookOutline />
                </span>
                Start Reading
              </button>
            </div>
            <div className="relative max-w-[1440px]">
              {anime.attributes?.tags
                .sort((a, b) => {
                  if (
                    a.attributes.name.en === "Sexual Violence" ||
                    a.attributes.name.en === "Gore"
                  ) {
                    return -1;
                  } else if (
                    b.attributes.name.en === "Sexual Violence" ||
                    b.attributes.name.en === "Gore"
                  ) {
                    return 1;
                  } else {
                    return 0;
                  }
                })
                .map((value, index) => (
                  <button
                    key={`genre_button-${index}`}
                    className={
                      value.attributes.name.en === "Sexual Violence" ||
                      value.attributes.name.en === "Gore"
                        ? " bg-red-700 rounded px-2 my-1 inline-block  mr-1"
                        : "bg-slate-600 rounded px-2 my-1 inline-block mr-1"
                    }
                  >
                    <span className="font-light">
                      {value.attributes.name.en}
                    </span>
                  </button>
                ))}
            </div>
            <div className="flex gap-2">
              <div>Rating</div>
              <div>Saving</div>
            </div>
          </div>
        </div>
        <div className="line-clamp-5 text-gray-200 border-b-[1px] py-5 my-5">
          {anime.attributes.description.en}
        </div>
        <div className="flex gap-8">
          <div className="w-[500px]">
            <div className="w-400px]">
              <div className="">
                <h1 className="font-bold ">Author</h1>
                <div className="flex gap-2 relative">
                  {findAuthor.map((value, index) => {
                    return (
                      <button
                        key={`author-key${index}`}
                        className=" bg-slate-800 rounded px-2 my-1 mr-1"
                      >
                        <span className="font-light inline">
                          {value.attributes?.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <h1 className="font-bold">Artist</h1>
                {findArtist.map((value, index) => {
                  return (
                    <button
                      key={`author-key${index}`}
                      className=" bg-slate-800 rounded px-2 my-1 mr-1"
                    >
                      <span className="font-light inline">
                        {value.attributes?.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-1">
              <div>
                <h1 className="font-bold">Genres</h1>
                {anime.attributes?.tags
                  .sort((a, b) => {
                    if (
                      a.attributes.name.en === "Sexual Violence" ||
                      a.attributes.name.en === "Gore"
                    ) {
                      return -1;
                    } else if (
                      b.attributes.name.en === "Sexual Violence" ||
                      b.attributes.name.en === "Gore"
                    ) {
                      return 1;
                    } else {
                      return 0;
                    }
                  })
                  .map((value, index) => (
                    <button
                      key={`genre_button-${index}`}
                      className={
                        value.attributes.name.en === "Sexual Violence" ||
                        value.attributes.name.en === "Gore"
                          ? " bg-red-700 rounded px-2 my-1 inline-block mr-1"
                          : "bg-slate-600 rounded px-2 my-1 inline-block mr-1"
                      }
                    >
                      <span className="font-light">
                        {value.attributes.name.en}
                      </span>
                    </button>
                  ))}
              </div>
              <div>
                <h1 className="font-bold">Demographic</h1>
                <button className=" bg-slate-800 rounded px-2 my-1">
                  <h3 className=" font-light">Demographic</h3>
                </button>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <h1 className="font-bold">Track</h1>
                <button className=" bg-slate-800 rounded px-2 my-1">
                  <h3 className=" font-light">Author</h3>
                </button>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-full">
                <h1 className="font-bold">Alternative Titles</h1>
                {anime.attributes.altTitles.map((obj, index) => {
                  return (
                    <div className="w-full" key={`title-${index}`}>
                      <h3 className=" py-1 flex border-b-[1px] border-gray-800">
                        <span>{/*object.keys*/}</span>
                        {Object.values(obj)[0]}
                      </h3>
                    </div>
                  );
                })}
                <div>
                  <h3 className="flex border-b-[1px] border-gray-800">
                    <span></span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
            {/* {DropDown Stuff} */}
           <ListChapter id={anime.id}/>
        </div>
      </div>
    </div>
  );
}

export default MangaPage;
