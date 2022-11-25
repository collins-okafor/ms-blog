import Image from "next/image";
import React, { memo } from "react";
import HeroImage from "../../assets/Images/19385.jpg";
import { HeroDiv } from "./styles/heroSection.style";

const HeroSection = () => {
  return (
    <HeroDiv bg={HeroImage}>
      <div className="heroImageWrapper">
        {/* <Image src={HeroImage} alt={"hero"} className="heroImage" /> */}
      </div>
      <div className="heroDetails">
        <h3 className="heroDetails__header">
          MS-BLOG is a place to write, read and connect
        </h3>
        <p className="heroDetails__contents">{`it's easy and free to post your thinking on any topic and connect with millions of readers`}</p>
        <div className="heroDetails__action">
          <button>Get Started</button>
        </div>
      </div>
    </HeroDiv>
  );
};

export default memo(HeroSection);
