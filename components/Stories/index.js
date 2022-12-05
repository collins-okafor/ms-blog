import React from "react";
import PostAdsStructure from "../../universal-Components/postAdsStructure";
import { StoriesDiv } from "./styles/stories.style";

const StoriesPage = () => {
  return (
    <StoriesDiv>
      <div className="storiesWrapper">
        <h3>Your stories</h3>
      </div>
      <div>
        <PostAdsStructure />
      </div>
    </StoriesDiv>
  );
};

export default StoriesPage;
