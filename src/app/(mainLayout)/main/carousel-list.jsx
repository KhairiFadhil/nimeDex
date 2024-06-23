"use client";
import { useEffect, useState } from "react";
import Carousel from "./carousels";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

function CarouselList({ animeData }) {
  const [slide, setSlider] = useState(0);

  const handlePrevClick = () => {
    setSlider((prevSlide) =>
      prevSlide === 0 ? animeData.length - 1 : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setSlider((prevSlide) =>
      prevSlide === animeData.length - 1 ? 0 : prevSlide + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
        handleNextClick();
    }, 5000); // Change the interval duration as needed

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [handleNextClick]);

  return (
    <div className="slider">
      <div className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${slide * 100}%)` }}>
        {animeData.map((anime, index) => {
        const coverArt = anime.relationships.find(relationship => relationship.type === 'cover_art');
        const titleString = anime.attributes.altTitles.map(obj => Object.values(obj)[0]).join(', ');
        return (
          <Carousel
            key={`carousel-manga-${index}`}
            title={anime.attributes.title.en}
            desc={anime.attributes.description.en}
            img={coverArt?.attributes?.fileName}
            id={anime.id}
            altTitle={titleString || anime.attributes.title.en}
            tags={anime.attributes?.tags}
          />
        )}
        )}
      </div>
      <div className="mx-auto max-w-[1440px] hidden lg:block">
        <div className="flex justify-end max-w-[1440px]">
          <div className="flex gap-5 absolute  top-[390px] mr-10"> 
            <h2 className=" content-center">Popular <span className={ slide === 0 ? "font-bold text-red-600" : "font-bold"}>NO. {slide + 1}</span></h2>
            <button onClick={handlePrevClick} className="rounded-full items-center flex justify-center transition-all hover:bg-slate-500" style={{width: "35px", height:"35px"}}><GrFormPrevious style={{width: "25px", height:"25px"}}/></button>
            <button onClick={handleNextClick} className="rounded-full items-center flex justify-center transition-all hover:bg-slate-500" style={{width: "35px", height:"35px"}}><GrFormNext style={{width: "25px", height:"25px"}}/></button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] block lg:hidden">
       
          <div className="flex justify-around max-w-[1440px]"> 
            
            <button onClick={handlePrevClick} className="rounded-full items-center flex justify-center transition-all hover:bg-slate-500" style={{width: "35px", height:"35px"}}><GrFormPrevious style={{width: "25px", height:"25px"}}/></button>
            <h2 className=" content-center">Popular <span className={ slide === 0 ? "font-bold text-red-600" : "font-bold"}>NO. {slide + 1}</span></h2>
            <button onClick={handleNextClick} className="rounded-full items-center flex justify-center transition-all hover:bg-slate-500" style={{width: "35px", height:"35px"}}><GrFormNext style={{width: "25px", height:"25px"}}/></button>
          </div>

        </div>
    </div>
  );
}

export default CarouselList;
