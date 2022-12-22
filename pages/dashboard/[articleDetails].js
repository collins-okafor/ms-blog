import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoardServices from "../../services/dashboardServices";
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

  const fetchSingleArticle = () => {
    setLoading(true);
    DashBoardServices.getDashSingleArticle(articleDetails)
      .then((data) => {
        dispatch(getDashboardSinglePost(data));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        throw err;
      });
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
