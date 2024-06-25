import Link from "next/link"
import Image from "next/image"
import { IoMdPeople } from "react-icons/io"
import { CiClock2 } from "react-icons/ci"


function ChapterList({api, titleStat, state}){
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
              className={`h-[60px] flex backdrop-blur-lg py-2 px-2 chapter-list bg-neutral-900 transition-all hover:bg-neutral-800`}
              href={`/chapter/${api.id}`}
            >
              <div className="flex flex-grow flex-col">
                <h2 className="flex gap-1 ">
                  <span>
                    <Image className="" width={20} height={20} src={`https://mangadex.org/img/flags/${flag}.svg`} alt="flag"/>
                  </span>
                    {`${titleStat ? `Ch. ${api.attributes?.chapter} - ` : ``}${api.attributes?.title === null ? '' : api.attributes?.title}` || `Ch.${api.attributes?.chapter}`} 
                </h2>
                <div href="#" className="flex gap-1 align-top">
                  <IoMdPeople style={{ width: "20px", height: "20px" }} /> Group
                </div>
              </div>
              <div className="flex gap-1 ">
                <CiClock2
                  className=""
                  style={{ width: "20px", height: "20px" }}
                />
                Time Upload
              </div>
            </Link>
    )
}
export default ChapterList