import React, { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import landingpageService from "../../services/landingpageServices";
import { getAllArticle } from "../../store/actions/landingPageAction";
import Loader1 from "../../universal-Components/Loaders/loader1";
import HeroSection from "./heroSection";
import PostStructure from "./postStructure";
import { LandingDiv } from "./styles/landing.style";
import InfiniteScroll from "react-infinite-scroller";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [increament, setIncreament] = useState(0);

  const getAllarticle = useSelector(
    (state) => state.landingPageReducer.getAllarticle
  );

  const [loading, setLoading] = useState(true);

  const fetchAllData = async () => {
    setLoading(true);
    await landingpageService.getAllArticle({ limit: 1 }).then((data) => {
      console.log(data);
      dispatch(getAllArticle(data));
      setIncreament(0);
      setLoading(false);
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchAllData();
    // setLoading(false);
  }, []);

  return (
    // <InfiniteScroll
    //   pageStart={increament}
    //   loadMore={async () => {
    //     // getAllarticle.count >= increament ? increament : setIncreament((prev) => prev + 1)
    //     if (getAllArticle?.count >= increament) {
    //       return;
    //     } else {
    //       await landingpageService.getAllArticle({ limit: 2 }).then((data) => {
    //         console.log(data);
    //         dispatch(getAllArticle(data));
    //         setIncreament((prev) => prev + 1);
    //       });
    //     }
    //   }}
    //   hasMore={true || false}
    //   loader={
    //     <div className="loader" key={0}>
    //       Loading ...
    //     </div>
    //   }
    // >
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
    // </InfiniteScroll>
  );
};

const ads = [{}, {}, {}];

export default memo(LandingPage);
