"use client"
import Image from "next/image";
import { useState,useEffect } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Search from "./search";

function Navbar({show, onClick}){
    const [scrollEffect, setScrollEffect] = useState(true)
    function HandleScroll(){
        if (window.scrollY > 10){
            setScrollEffect(false)
        }
        else {
            setScrollEffect(true)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", HandleScroll);
    
        return () => {
          window.removeEventListener("scroll", HandleScroll);
        };
      }, []);

    return(
    <div className={scrollEffect ? "z-[9999] border-red-600 bg-transparent w-full h-14 fixed z-50 justify-center transition-all" : " bg-slate-900 w-full h-14 fixed z-[9999] justify-center transition-all border-b-2 border-red-600"}>
            <div className="flex mx-auto max-w-[1440px] max-h-14 min-h-14 ">
                <div className="w-full flex gap-2 px-4 justify-end">
                    <div className="flex min-w-fit mr-auto gap-5 ">
                    <button type="button" onClick={onClick} className="content-center"><RxHamburgerMenu className=" text-slate" style={{width:"20px", height:"20px"}}/></button>
                    <Link className="flex content" href="/" style={{width:"112px", height:"50px"}}>
                       <Image
                       className="object-cover relative top-2 drop-shadow-2xl"
                       src="/NimeDex.svg"
                       alt="Nimedex Logo"
                       width={112}
                       height={50}
                       />

                    </Link>
                    <div className="min-w-fit mr-auto gap-5 hidden md:flex">
                        <Link href="/" className="content-center ">Home</Link>
                        <Link href="#" className="content-center">Updates</Link>
                        <Link href="#" className="content-center">Library</Link>
                        <Link href="#" className="content-center">My List</Link>
                    </div>
                    </div>

                    <Search/>
                </div>
                

            </div>

        </div>
    )
}

export default Navbar