import "./Loader.css";
import Image from "next/image";
import backgroundImage from "../../public/assets/loaderBg.jpg";
import React from "react";

const Loader = () => {
  return (
    <>
      <div className="z-30 fixed w-screen h-screen flex justify-center items-center">
        <Image
          src={backgroundImage}
          alt="Background Image Langtang"
          className="fixed -z-10 brightness-75 min-h-screen"
        />
        <div className="loader">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
