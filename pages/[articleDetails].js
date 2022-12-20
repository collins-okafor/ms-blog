import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArticleDetailsDiv } from "../public/generalStyles";
import landingpageService from "../services/landingpageServices";
import { getSingleArticleDetails } from "../store/actions/generalAction";
import ArticleDisplay from "../universal-Components/ArticleDisplay";
import Loader1 from "../universal-Components/Loaders/loader1";

const ArticleDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getSingleArticle = useSelector(
    (state) => state.generalReducer.getSingleArticle
  );

  const { articleDetails } = router.query;

  const fetchSingleArticle = () => {
    setLoading(true);
    landingpageService
      .getSingleArticle(articleDetails)
      .then((data) => {
        dispatch(getSingleArticleDetails(data));
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
    <ArticleDetailsDiv>
      {!getSingleArticle || loading ? <Loader1 /> : <ArticleDisplay />}
    </ArticleDetailsDiv>
  );
};

export default ArticleDetails;
