"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => { }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Marvel Heroes App</h1>
        <p className="hero__subtitle">Search and access information about Marvel's vast library of comics <br />—from what's coming up, to 70 years ago.</p>
        <a href="#searchBar">
          <CustomButton
            title="Search heroes"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </a>
      </div>
      <div className="hero__image-container">
        <div className="hero__image w-full h-full">
          <Image src="/heroes.png" alt="SPECTRUM by Chris Allen @2023 Marvel's Stormbreakers Class" layout="fill" objectFit="contain" className="object-contain" />
        </div>
        <div className="hero__image-overlay w-full h-full">
        </div>
      </div>
    </div>
  )
}

export default Hero