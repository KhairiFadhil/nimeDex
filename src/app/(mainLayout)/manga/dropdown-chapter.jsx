"use client"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import ChapterList from "@/app/component/chapter-list";
import { useState } from "react";

function DropDownChapter({api}){
    const [dropDown, setDropDown] = useState(true)
    const HandleClick = () => setDropDown(!dropDown)
    console.log(Object.values(api[1]).length)
    if(Object.values(api[1]).length > 1) {
    return(
        <div className={`flex flex-col w-auto p-2 overflow-hidden transition-all bg-purple-600 ${dropDown ? ` max-h-[100%]` : `max-h-[40px]`}`}>
                <div className="flex justify-between transition-all">
                <span className="flex gap-2"><FaRegEye className="flex content-center items-center" style={{width: "25px", height:"25px"}}/>Chapter {api[0]}</span>
                    <button onClick={HandleClick}><IoIosArrowDown className={` transition-all ${dropDown ? "" : "rotate-180"}`} style={{width: "25px", height:"25px"}}/></button>
                        </div>
                    <div className={`mt-2 transition-all`}>
                        {Object.values(api[1].map((value,index) => 
                        <ChapterList api={value} key={`chapter-list${index}`}/>
                        ))}
                            </div>
                </div>
    )
    }
    return(
        <div>
             {Object.values(api[1].map((value,index) => 
                        <ChapterList titleStat={true} api={value} key={`chapter-list${index}`}/>
                 ))}
        </div>
    )
}
export default DropDownChapter