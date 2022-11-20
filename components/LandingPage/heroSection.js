import Image from "next/image";
import React, { memo } from "react";
import HeroImage from "../../assets/Images/19385.jpg";
import { HeroDiv } from "./styles/heroSection.style";

const HeroSection = () => {
  return (
    <HeroDiv>
      <div className="heroImageWrapper">
        <Image src={HeroImage} alt={"hero"} className="heroImage" />
      </div>
    </HeroDiv>
  );
};

export default memo(HeroSection);
