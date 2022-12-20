import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Stories from "../../services/stories";
import { getDynamicPost } from "../../store/actions/generalAction";
import PostAdsStructure from "../../universal-Components/postAdsStructure";
import { StoriesDiv } from "./styles/stories.style";

const StoriesPage = () => {
  const dispatch = useDispatch();

  const readMyStories = () => {
    console.log("joshua");
    Stories.getMyStories().then((data) => {
      console.log(data);
      dispatch(getDynamicPost(data));
    });
  };

  useEffect(() => {
    readMyStories();
  }, []);

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
