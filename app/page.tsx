"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Unbounded, Work_Sans } from "next/font/google";
import Timer from "./components/Timer";
import Loader from "./components/Loader";
import backgroundImage from "../public/assets/langtang2-blue.png";

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
      <main className="w-screen h-screen flex-col justify-center items-center">
        <Image
          src={backgroundImage}
          alt="Background Image Langtang"
          className="fixed -z-10 brightness-75 min-w-[1000px] sm:min-w-screen"
          onLoadingComplete={handleLoadingComplete}
        />
        <div className="flex xl:flex-row flex-col w-full h-full justify-center items-center gap-10 sm:gap-20 2xl:gap-20">
          <h1
            className={`${unbounded.className} 2xl:text-[4rem] sm:text-[3rem] text-[2rem] font-medium drop-shadow-2xl`}
          >
            BKC <br className="hidden xl:block" />
            At Langtang
          </h1>
          <div className="hidden xl:block w-[0.1em] h-72 bg-white rounded-full"></div>
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
      </main>
    </>
  );
}
