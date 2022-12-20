import React from "react";
import ProfilePage from "../../components/Profile";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";

const Profile = () => {
  return (
    <DashbaordPageWrapper>
      <ProfilePage />
    </DashbaordPageWrapper>
  );
};

Profile.auth = true;

export default Profile;
