import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoardServices from "../../services/dashboardServices";
import {
  getDashboardSinglePost,
  getSinglePostComment,
  getSinglePostDisLike,
  getSinglePostLike,
  getUserDetails,
} from "../../store/actions/dashboardAction";
import DashboardArticleDisplay from "../../universal-Components/ArticleDisplay/dashboardAriticleDisplay";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";
import Loader1 from "../../universal-Components/Loaders/loader1";

const ArticleDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getSingleArticle = useSelector(
    (state) => state.DashboardReducers.dashboardSinglePost
  );

  const { articleDetails } = router.query;

  const fetchSingleArticle = async () => {
    setLoading(true);

    const constants = await Promise.all([
      DashBoardServices.getUserDetails(),
      DashBoardServices.getDashSingleArticle(articleDetails),
      DashBoardServices.getAllPostComment(articleDetails),
      DashBoardServices.getAllPostLike(articleDetails),
      DashBoardServices.getAllPostDisLike(articleDetails),
    ])
      .then((data) => {
        return data;
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        throw err;
      });

    console.log(constants, "main details");

    dispatch(getUserDetails(constants[0]));
    dispatch(getDashboardSinglePost(constants[1]));
    dispatch(getSinglePostComment(constants[2]));
    dispatch(getSinglePostLike(constants[3]));
    dispatch(getSinglePostDisLike(constants[4]));
    setLoading(false);
  };

  useEffect(() => {
    fetchSingleArticle();
  }, []);

  return (
    <DashbaordPageWrapper>
      {!getSingleArticle || loading ? <Loader1 /> : <DashboardArticleDisplay />}
    </DashbaordPageWrapper>
  );
};

ArticleDetails.auth = true;

export default ArticleDetails;
