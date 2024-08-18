"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Unbounded, Work_Sans } from "next/font/google";
import Timer from "./components/Timer";
import Loader from "./components/Loader";
import backgroundImage from "../public/assets/langtang2-blue.png";
import dynamic from "next/dynamic";

const TrekMap = dynamic(() => import("./components/TrekMap"), { ssr: false });

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const totalImages = 1;

  const handleLoadingComplete = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imagesLoaded === totalImages) {
        setShowLoader(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [imagesLoaded, totalImages]);

  const allImagesLoaded = imagesLoaded === totalImages;
  return (
    <>
      {showLoader && (
        <div className="bg-[#296eb1] z-20 brightness-75 w-screen h-screen fixed"></div>
      )}
      {!allImagesLoaded && <Loader />}
      <div className="w-screen overflow-hidden h-screen flex-col justify-center items-center">
        <Image
          src={backgroundImage}
          alt="Background Image Langtang"
          className="fixed -z-10 brightness-75 min-w-[1000px] sm:min-w-screen xl:min-h-none min-h-screen"
          onLoadingComplete={handleLoadingComplete}
        />
        <div className="flex xl:flex-row flex-col w-full h-full justify-center items-center gap-10 sm:gap-20 2xl:gap-20">
          <h1
            className={`${unbounded.className} 2xl:text-[4rem] sm:text-[3rem] text-[2rem] font-medium drop-shadow-2xl`}
          >
            BKC <br className="hidden xl:block" />
            At Langtang
          </h1>
          <div className="hidden xl:block w-[0.1em] h-56 bg-white rounded-full"></div>
          <div className="flex-col justify-center items-center">
            <p
              className={`${unbounded.className} sm:text-xl font-normal text-center mb-6 sm:mb-8 bg-[#0b335dd8] drop-shadow-2xl uppercase rounded-xl py-3 sm:py-5`}
            >
              Days To Go
            </p>
            <Timer />
          </div>
          {/* 17th October */}
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center flex-wrap">
        <div className="min-h-screen flex flex-col justify-start items-center gap-20 overflow-hidden">
          <h1
            className={`${unbounded.className} text-4xl sm:text-5xl mt-24 drop-shadow-2xl w-max`}
          >
            Itinerary
          </h1>
          <ul className="flex flex-col items-start gap-3 w-max">
            <li
              className={`${workSans.className} text-md sm:text-2xl text-wrap break-words`}
            >
              <span className="font-semibold">Day 1 &nbsp; |</span>
              &nbsp; Drive from Kathmandu to Syabrubesi (1,550m)
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 2 &nbsp; |</span>
              &nbsp; Trek from Syabrubesi to Lama Hotel (2,380m)
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 3 &nbsp; |</span>
              &nbsp; Trek from Lama Hotel to Langtang Village (3,430m)
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 4 &nbsp; |</span>
              &nbsp; Trek from Langtang Village to Kyanjin Gompa (3,870m)
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 5 &nbsp; |</span>
              &nbsp; Explore Kyanjin Gompa and hike to Tserko Ri (4,984m)
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 6 &nbsp; |</span>
              &nbsp; Trek back from Kyanjin Gompa to Lama Hotel
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 7 &nbsp; |</span>
              &nbsp; Trek from Lama Hotel to Syabrubesi
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 8 &nbsp; |</span>
              &nbsp; Drive back from Syabrubesi to Kathmandu
            </li>
          </ul>
        </div>
        <TrekMap />
      </div>
    </>
  );
}
