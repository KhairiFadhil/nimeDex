"use client"
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoCheckmarkDone } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function SideBar({onClick, show}){
    return(
        <div className={show ? "fixed bg-slate-600 h-full w-[250px]  max-w-[250px] z-50 overflow-hidden transition-all" : "transition-all overflow-hidden fixed bg-slate-600 h-full max-w-[250px] z-50 w-0"}>
            <div className="mx-">   
                <div className="flex m-3 bg-slate-300 h-[75px]" >
                    <div className="flex flex-grow">
                        JestFlix
                    </div>
                    <div>
                    <button type="button" className="button" onClick={onClick}><IoIosArrowForward /></button>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-5 mx-4">
                        <li className="">
                            <Link href="" className="flex gap-1"><span className="img-list"><CiBellOn/></span>Notification</Link>
                        </li>
                        <li className="">
                            <Link href="" className="flex gap-1"><span className="img-list"><IoCheckmarkDone  /></span>My List</Link>
                        </li>
                        <li className="">
                            <Link href="" className="flex gap-1"><span className="img-list"><IoIosSettings /></span>Setting</Link>
                        </li>
                        <li className="">
                            <Link href="" className="flex gap-1"><span className="img-list"><CgProfile /></span>Account</Link>
                        </li>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center  mt-5">
                    <Link href="">Login</Link>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        Created By Kalri 
                        <div className="flex justify-between my-10">
                            <Link href="">
                            <FaDiscord style={{width: "30px", height:"30px"}}/>
                            </Link>
                            <Link href="">
                            <FaInstagram style={{width: "30px", height:"30px"}} />
                            </Link>
                        </div>
                    </div>
                </div> 
                </div>
                
                <div>

                </div>
            </div>
        </div>
    )
}