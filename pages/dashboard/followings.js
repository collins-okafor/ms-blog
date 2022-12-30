import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EditProfile from "../../components/editprofile";
import Following from "../../components/following";
import DashBoardServices from "../../services/dashboardServices";
import {
  getAllFollowingDetails,
  getSavedPost,
} from "../../store/actions/dashboardAction";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";
import Loader1 from "../../universal-Components/Loaders/loader1";

const Followings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchAllArticle = async () => {
    setLoading(true);

    const constants = await Promise.all([
      DashBoardServices.getAllYourSavedPost(),
      DashBoardServices.getAllFollowing(),
    ])
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });

    dispatch(getSavedPost(constants[0]?.data));
    dispatch(getAllFollowingDetails(constants[1]?.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchAllArticle();
  }, []);

  return (
    <DashbaordPageWrapper>
      {loading && <Loader1 />}

      {!loading && <Following />}
      {/* <EditProfile /> */}
    </DashbaordPageWrapper>
  );
};

Followings.auth = true;

export default Followings;
