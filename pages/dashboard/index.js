import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DashboardPage from "../../components/Dashboard";
import DashBoardServices from "../../services/dashboardServices";
import {
  getDashboardAllArticle,
  getDashboardLoader,
} from "../../store/actions/dashboardAction";
import {
  getDynamicPost,
  getSingleArticleDetails,
} from "../../store/actions/generalAction";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";

const Dashboard = () => {
  const dispatch = useDispatch();

  const fetchAllArticle = async () => {
    dispatch(getDashboardLoader(true));
    await DashBoardServices.GetAllDashArticle().then((data) => {
      dispatch(getDynamicPost(data?.data));
      dispatch(getDashboardAllArticle(data));
      dispatch(getDashboardLoader(false));
    });
    dispatch(getDashboardLoader(false));
  };

  useEffect(() => {
    fetchAllArticle();
  }, []);

  return (
    <DashbaordPageWrapper>
      <DashboardPage />
    </DashbaordPageWrapper>
  );
};

Dashboard.auth = true;

export default Dashboard;
