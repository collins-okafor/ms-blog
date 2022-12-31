import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardPage from "../../components/Dashboard";
import DashBoardServices from "../../services/dashboardServices";
import {
  getDashboardAllArticle,
  getDashboardLoader,
  getUserStore,
} from "../../store/actions/dashboardAction";
import { getDynamicPost } from "../../store/actions/generalAction";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";

const Dashboard = () => {
  const dispatch = useDispatch();

  const userStore = useSelector((state) => state.DashboardReducers.userStore);

  const fetchAllArticle = async () => {
    dispatch(getDashboardLoader(true));
    const constants = await Promise.all([
      DashBoardServices.GetAllDashArticle(),
      DashBoardServices.getAllYourSavedPost(),
      DashBoardServices.getAllFollowing(),
    ])
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });

    constants[0]?.data?.map((item) => {
      const findArticle =
        constants[1]?.data.length > 0 &&
        constants[1]?.data?.find((save) => save?.postId === item._id);

      if (findArticle) {
        item["save"] = true;
      }

      const findFollowers = constants[2]?.data?.find(
        (data) => data.followedUserId === item.createdBy
      );

      if (findFollowers) {
        item["followed"] = true;
      }

      if (userStore?._id === item.createdBy) {
        item["followed"] = "my";
      }
    });

    dispatch(getDynamicPost(constants[0]?.data));
    dispatch(getDashboardAllArticle(constants[0]));
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
