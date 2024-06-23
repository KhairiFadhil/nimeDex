"use client"
import { useState } from "react"
import { CiBookmark } from "react-icons/ci"
import { IoMdArrowDropup } from "react-icons/io";
function SideMenu(){
    const [menu, SetMenu] = useState(true)
    const handleMenu = () => SetMenu(!menu)
    return(
        
        <div className={` z-[9999] w-full ${menu ? "max-h-[100%]" : "max-h-[50px]"} transition-all fixed  shadow-2xl bottom-0 left-0`}>
        <button className=" z-[9999] group relative" onClick={handleMenu}><IoMdArrowDropup className="absolute bottom-[-42px] left-[100%] transition-all text-8xl group-hover:text-gray-500 group-active:text-gray-800"/></button>
        <div className="flex w-full h-[150px] p-1 relative flex-col justify-center bg-gray-900 ">
         <div>
             <div className="flex">
                 <span className="flex gap-1 items-center"><CiBookmark className=""/>Title</span>
             </div>
             <div>
                 
             </div>
         </div>
         <div>
             Uploaded By
         </div>
         <div>
             Settings
         </div>

        </div>
     </div>
    )
}
export default SideMenu