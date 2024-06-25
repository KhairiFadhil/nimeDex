import Link from "next/link"
import Image from "next/image"
import { IoMdPeople } from "react-icons/io"
import { CiClock2 } from "react-icons/ci"

function ChaptersList({api, titleStat, chapterNum}){
  let flag;
  if (api.attributes.translatedLanguage == 'en'){
    flag = 'gb'
  }
  else {
    const splitFlag = api.attributes.translatedLanguage.split('-');
    flag = splitFlag[0]
  }
    return(
        <Link
              className={`h-[60px] rounded-md flex backdrop-blur-lg py-2 px-2 chapter-list ${chapterNum ===  api.attributes?.chapter ? "bg-neutral-500" : ""} bg-neutral-900
               transition-all hover:bg-neutral-800 bg-opacity-50`}
              href={`${api.id}`}
            >
              <div className="flex flex-grow flex-col">
                <h2 className="flex gap-1 ">
                  <span>
                    <Image className="" width={20} height={20} src={`https://mangadex.org/img/flags/${flag}.svg`} alt="flag"/>
                  </span>
                    {`Ch. ${api.attributes?.chapter}`} 
                </h2>
                <div href="#" className="flex gap-1 align-top">
                  <IoMdPeople style={{ width: "20px", height: "20px" }} /> Group
                </div>
              </div>

            </Link>
    )
}

export default ChaptersList