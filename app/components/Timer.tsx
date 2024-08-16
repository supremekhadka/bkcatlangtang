"use client";

import React, { useEffect, useState } from "react";

import { Work_Sans } from "next/font/google";
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const date = "October 17, 2024";

  const getTime = () => {
    const time = (Date.parse(date) - Date.now()) / 1000;
    setDays(Math.floor(time / 86400));
    setHours(Math.floor((time % 86400) / 3600));
    setMinutes(Math.floor((time % 3600) / 60));
    setSeconds(Math.floor(time % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`${workSans.className} relative flex justify-center items-center gap-10  bg-opacity-100 z-10 rounded-3xl drop-shadow-2xl`}
      >
        <div className="absolute w-full h-full -z-20 bg-[#3f94e4] opacity-100 blur-[75px] bg-blend-soft-light animate-pulse"></div>
        <div
          className={`${workSans.className} border	 relative flex justify-center items-center 2xl:gap-10 xl:gap-8 lg:gap-6 sm:gap-4 gap-4 bg-[#0d1824c4] bg-opacity-100 z-10 rounded-3xl 2xl:px-16 2xl:py-10 xl:px-14 xl:py-8 sm:px-12 sm:py-6 px-8 py-6 drop-shadow-2xl`}
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="2xl:text-5xl xl:text-3xl text-2xl">
              {days < 10 ? "0" + days : days}
            </h1>
            <span className="font-light text-sm sm:text-normal">Days</span>
          </div>

          <h1 className="sm:text-2xl text-lg">:</h1>

          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="2xl:text-5xl xl:text-3xl text-2xl">
              {hours < 10 ? "0" + hours : hours}
            </h1>
            <span className="font-light text-sm sm:text-normal">Hours</span>
          </div>

          <h1 className="sm:text-2xl text-lg">:</h1>

          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="2xl:text-5xl xl:text-3xl text-2xl">
              {minutes < 10 ? "0" + minutes : minutes}
            </h1>
            <span className="font-light text-sm sm:text-normal">Minutes</span>
          </div>

          <h1 className="sm:text-2xl text-lg">:</h1>

          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="2xl:text-5xl xl:text-3xl text-2xl">
              {seconds < 10 ? "0" + seconds : seconds}
            </h1>
            <span className="font-light text-sm sm:text-normal">Seconds</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
