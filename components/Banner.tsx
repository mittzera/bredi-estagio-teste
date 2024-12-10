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
    <div className="mt-14 relative w-full md:w-[90vw] mx-auto">
      <div className="relative w-full overflow-hidden">
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
              <div
                className={banner.classnameprop}
              >
                {banner.content}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-3 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-3 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Banner;
