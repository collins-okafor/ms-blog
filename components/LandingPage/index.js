import React, { memo } from "react";
import SinglePost from "../post/singlePost";
import HeroSection from "./heroSection";
import PostStructure from "./postStructure";
import { LandingDiv } from "./styles/landing.style";

const LandingPage = () => {
  return (
    <LandingDiv>
      <div className="landingHeroSection">
        <HeroSection />
      </div>
      <div className="landingBodySection">
        <div className="landingBodySectionPost">
          <PostStructure />
        </div>
        <div className="landingBodySectionAds"></div>
      </div>
    </LandingDiv>
  );
};

export default memo(LandingPage);
