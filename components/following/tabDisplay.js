import React, { useState } from "react";
import PostAdsStructure from "../../universal-Components/postAdsStructure";
import Ads from "../../universal-Components/postAdsStructure/ads";
import PostStructure from "../../universal-Components/postStructure";
import { PostStructureDiv } from "../../universal-Components/postStructure/styles/postStructure.styles";
import ViewProfileCard from "../../universal-Components/viewProfileCard";
import { StyledTabDisplay } from "./styles/style.tabDisplay";
const TabDisplay = () => {
  const [display, setDisplay] = useState(true);
  const handleTabOne = () => {
    setDisplay(true);
  };
  const handleTabTwo = () => {
    setDisplay(false);
  };
  return (
    <StyledTabDisplay display={display}>
      <div className="buttonContainer">
        <button onClick={handleTabOne} className="tabOneBtn">
          Followers
        </button>
        <button onClick={handleTabTwo} className="tabTwoBtn">
          Saved Posts
        </button>
      </div>
      <div className="tabOneDisplay">
        <h1 className="header-text">Following</h1>
        <div className="tabContainer">
          <div className="leftContent">
            <ViewProfileCard />
          </div>
          <div className="rightContent">
            <Ads />
          </div>
        </div>
      </div>
      <div className="tabTwoDisplay">
        <h1 className="header-text">Saved</h1>
        <div className="tabContainer">
          <PostAdsStructure />
        </div>
      </div>
    </StyledTabDisplay>
  );
};

export default TabDisplay;
