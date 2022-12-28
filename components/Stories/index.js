import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Stories from "../../services/stories";
import { getDynamicPost } from "../../store/actions/generalAction";
import Loader1 from "../../universal-Components/Loaders/loader1";
import PostAdsStructure from "../../universal-Components/postAdsStructure";
import { StoriesDiv } from "./styles/stories.style";

const StoriesPage = () => {
  const dispatch = useDispatch();
  const [stories, setStories] = useState(true);

  const readMyStories = () => {
    setStories(true);
    Stories.getMyStories().then((data) => {
      dispatch(getDynamicPost(data));
      setStories(false);
    });
  };

  useEffect(() => {
    readMyStories();
  }, []);

  return (
    <div>
      {stories && (
        <div>
          <Loader1 />
        </div>
      )}
      {!stories && (
        <StoriesDiv>
          <div className="storiesWrapper">
            <h3>Your stories</h3>
          </div>
          <div>
            <PostAdsStructure />
          </div>
        </StoriesDiv>
      )}
    </div>
  );
};

export default StoriesPage;
