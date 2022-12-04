import React from "react";
import DashboardNavList from "../../universal-Components/DashboardNavList";
import PostAdsStructure from "../../universal-Components/postAdsStructure";

const DashboardPage = () => {
  return (
    <div style={{ width: "100%", margin: "30px 0px" }}>
      <DashboardNavList />
      <PostAdsStructure />
    </div>
  );
};

export default DashboardPage;
