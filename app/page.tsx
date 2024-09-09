//bkcatlangtang BKC At Langtang Bkc At Langtang bkc at langtang BKC AT LANGTANG

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
    <main className="text-slate-50">
      {showLoader && (
        <div className="bg-[#296eb1] z-20 brightness-75 w-screen h-screen fixed"></div>
      )}
      {!allImagesLoaded && <Loader />}
      <div className="w-full overflow-hidden h-screen flex-col justify-center items-center ">
        <Image
          src={backgroundImage}
          alt="Background Image Langtang"
          className="fixed -z-10 brightness-75 min-w-[1000px] sm:min-w-screen xl:min-h-none min-h-screen"
          onLoad={handleLoadingComplete}
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
      <div className="min-h-screen flex flex-col justify-start items-center flex-wrap bg-blend-overlay bg-gradient-to-b from-15% from-[#00000000] via-[#00000026] to-[#00000000]">
        <h1
          className={`${unbounded.className} text-4xl sm:text-5xl mt-24 drop-shadow-2xl w-max`}
        >
          Itinerary
        </h1>
        <div className=" flex flex-row justify-center items-center overflow-hidden my-auto">
          <ul className="flex flex-col items-start gap-3 w-full p-5 ">
            <li
              className={`${workSans.className} text-md sm:text-2xl text-wrap break-words `}
            >
              <span className="font-semibold">Day 1 &nbsp;</span>
              &nbsp; | &nbsp;Drive from Kathmandu to{" "}
              <span className="font-medium">Syabrubesi (1,550m)</span>
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 2 &nbsp;</span>
              &nbsp; | &nbsp;Trek from Syabrubesi to{" "}
              <span className="font-medium">Lama Hotel (2,380m)</span>
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 3 &nbsp;</span>
              &nbsp; | &nbsp;Trek from Lama Hotel to{" "}
              <span className="font-medium">Langtang Village (3,430m)</span>
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 4 &nbsp;</span>
              &nbsp; | &nbsp;Trek from Langtang Village to{" "}
              <span className="font-medium">Kyanjin Gompa (3,870m)</span>
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 5 &nbsp;</span>
              &nbsp; | &nbsp;Explore Kyanjin Gompa and hike to{" "}
              <span className="font-medium">Tserko Ri (4,984m)</span>
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 6 &nbsp;</span>
              &nbsp; | &nbsp;Trek back from Kyanjin Gompa to Lama Hotel
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 7 &nbsp;</span>
              &nbsp; | &nbsp;Trek from Lama Hotel to Syabrubesi
            </li>
            <li className={`${workSans.className} sm:text-2xl`}>
              <span className="font-semibold">Day 8 &nbsp;</span>
              &nbsp; | &nbsp;Drive back from Syabrubesi to Kathmandu
            </li>
          </ul>
          <TrekMap />
        </div>
      </div>
    </main>
  );
}
