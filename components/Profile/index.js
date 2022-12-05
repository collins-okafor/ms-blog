import React from "react";
import Ads from "../../universal-Components/postAdsStructure/ads";
import ProfileHeader from "./profileHeader";
import { ProfileDiv } from "./styles/profile.style";

const ProfilePage = () => {
  return (
    <ProfileDiv>
      <div className="profileDetials">
        <ProfileHeader />
      </div>
      <div className="profileAds">
        <Ads />
      </div>
    </ProfileDiv>
  );
};

export default ProfilePage;
