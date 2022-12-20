import React from "react";
import ArticleDisplay from "../../universal-Components/ArticleDisplay";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";

const ArticleDetails = () => {
  return (
    <DashbaordPageWrapper>
      <ArticleDisplay />
    </DashbaordPageWrapper>
  );
};

ArticleDetails.auth = true;

export default ArticleDetails;
