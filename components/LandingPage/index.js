import React, { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import landingpageService from "../../services/landingpageServices";
import { getAllArticle } from "../../store/actions/landingPageAction";
import Loader1 from "../../universal-Components/Loaders/loader1";
import HeroSection from "./heroSection";
import PostStructure from "./postStructure";
import { LandingDiv } from "./styles/landing.style";

const LandingPage = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const fetchAllData = async () => {
    setLoading(true);
    await landingpageService.getAllArticle().then((data) => {
      dispatch(getAllArticle(data));
      setLoading(false);
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchAllData();
    // setLoading(false);
  }, []);

  return (
    <div>
      <LandingDiv>
        <div className="landingHeroSection">
          <HeroSection />
        </div>
        <div className="landingBodySection">
          <div className="landingBodySectionPost">
            {loading && <Loader1 />}
            {!loading && <PostStructure />}
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
    </div>
  );
};

const ads = [{}, {}, {}];

export default memo(LandingPage);
