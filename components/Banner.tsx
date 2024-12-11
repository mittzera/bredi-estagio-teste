"use client";
import { banners } from "@/data";
import Image from "next/image";
import React, { useState } from "react";


function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  return (
    <div className="my-[8rem] relative w-full md:w-[90vw] mx-auto ">
      <div className="relative w-full overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${banners.length * 100}%`,
          }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <Image
                src={banner.src}
                alt={`Banner ${index + 1}`}
                layout="intrinsic"
                width={1920}
                height={600}
              />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white md:text-2xl text-xs sm:text-base font-extralight stext-wrap md:w-[30vw] w-[75vw] pl-4 break-normal ml-10 bg-black/30 rounded-xl p-5">
                {banner.content}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-white/30 p-3 py-5 ml-1"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-white/30 p-3 py-5bg-white/30 py-5 mr-1"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Banner;
