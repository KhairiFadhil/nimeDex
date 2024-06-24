"use client"
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function MangaPage({api}) {

  return (
    <div className="flex justify-center flex-col bg-blue-600" >
                    {api.chapter?.data.map((value, index) => {
                        return(
                            <section className="flex justify-center" key={`image-${index}`} >
                                <img className="w-full h-full" alt={`Page ${index + 1}`} src={`https://uploads.mangadex.org/data/${api.chapter.hash}/${value}`}>
                                </img>
                            </section>
                        )
                        
                    })}
        </div>
  );
}

export default MangaPage;