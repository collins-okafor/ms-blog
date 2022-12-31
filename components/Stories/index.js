import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DashBoardServices from "../../services/dashboardServices";
import Stories from "../../services/stories";
import { getDynamicPost } from "../../store/actions/generalAction";
import Loader1 from "../../universal-Components/Loaders/loader1";
import PostAdsStructure from "../../universal-Components/postAdsStructure";
import { StoriesDiv } from "./styles/stories.style";

const StoriesPage = () => {
  const dispatch = useDispatch();
  const [stories, setStories] = useState(true);

  const readMyStories = async () => {
    setStories(true);
    const constants = await Promise.all([
      Stories?.getMyStories(),
      DashBoardServices.getAllYourSavedPost(),
    ])
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });

    constants[0]?.map((item) => {
      const findArticle =
        constants[1]?.data.length > 0 &&
        constants[1]?.data?.find((save) => save?.postId === item?._id);

      if (findArticle) {
        item["save"] = true;
      }

      item["followed"] = "my";
    });

    dispatch(getDynamicPost(constants[0]));
    setStories(false);
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
