import React, { memo } from "react";
import HeroSection from "./heroSection";
import OpeningModalSwitcher from "./openingModalSwitcher";
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
        <div className="landingBodySectionAds">
          {ads?.map((item, key) => (
            <div key={key} className="landingBodySectionAdsItem">
              Ads
            </div>
          ))}
        </div>
      </div>
      
    </LandingDiv>
  );
};

const ads = [{}, {}, {}];

export default memo(LandingPage);
