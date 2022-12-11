import React from "react";
import EditProfile from "../../components/editprofile";
import Following from "../../components/following";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";

const Followings = () => {
  return (
    <DashbaordPageWrapper>
      <Following />
      {/* <EditProfile /> */}
    </DashbaordPageWrapper>
  );
};

export default Followings;
