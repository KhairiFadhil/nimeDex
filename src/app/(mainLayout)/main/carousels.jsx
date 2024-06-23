import { FaPlay, FaTags } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Link from "next/link";

function Carousel({ title, altTitle, desc, img, id, tags }) {
  return (
    <div className="carousel-card">
      <Link
        href={`/manga/${id}`}
        className="flex relative h-full overflow-hidden"
        style={{ height: "440px" }}
      >
        <img
          src={`https://mangadex.org/covers/${id}/${img}`}
          className="absolute left-0 top-0 w-[100%] h-[150%] object-cover select-none"
          style={{ objectPosition: "0px 30%" }}
        ></img>
        <div className=" inset-0 absolute bg-gradient-to-t from-[black] to-transparent"></div>
        <div className=" mb-6 md:mb-0 md:py-4 grid md:grid-rows-1 gap-2 md:h-[77%] sm:h-[65%] h-[70%] mt-auto xl:max-w-[1440px] w-full mx-auto">
          <div className="h-full relative z-20 flex gap-4">
            <div className="rounded h-full shadow-md object-cover aspect-[7/10] group object-top w-[200px] md:w-auto transition-all">
              <img
                src={`https://mangadex.org/covers/${id}/${img}`}
                className="w-full h-full rounded object-cover shadow-md"
              ></img>
            </div>
            <div
              className="grid mt-auto min-h-0 gap 6 h-[400px] w-full"
              style={{
                minHeight: "0px",
                gridTemplateRows: "max-content max-content max-content auto min-content",
              }}
            >
              <h2
                className="text-4xl font-bold line-clamp-2 "
                style={{ lineHeight: "2.75rem" }}
              >
                {title}
              </h2>
              <h4 className="text-overflow-ellipsis whitespace-nowrap overflow-hidden line-clamp-6">
                {altTitle}
              </h4>
              <div className="">
                {tags.sort((a, b) => {
                if (a.attributes.name.en === "Sexual Violence" || a.attributes.name.en === "Gore") {
                    return -1;
                } else if (b.attributes.name.en === "Sexual Violence" || b.attributes.name.en === "Gore") {
                    return 1;
                } else {
                    return 0;
                }
                }).map((value, index) => (
                <button
                    key={`genre_button-${index}`}
                    className={
                    value.attributes.name.en === "Sexual Violence" || value.attributes.name.en === "Gore"
                    ? " bg-red-700 rounded px-2 my-1 inline-block mr-1"
                        : "bg-slate-600 rounded px-2 my-1 inline-block mr-1"
                    }
                >
                    <span className="font-light text-sm">{value.attributes.name.en}</span>
                </button>
                ))}
              </div>
              <div className="line-clamp-2 text-gray-200 flex flex-grow">{desc}</div>
              <div className="flex gap-2 mb-20">
                <button
                  type="button"
                  className="button-carousel bg-white text-black font-bold flex items-center gap-2 type1"
                >
                  <span className="">
                    <FaPlay />
                  </span>
                  Play
                </button>
                <button
                  type="button"
                  className="button-carousel bg-slate-600 font-bold flex items-center gap-2"
                >
                  <span>
                    <IoIosInformationCircleOutline
                      style={{ height: "20px", width: "20px" }}
                    />
                  </span>
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Carousel;
