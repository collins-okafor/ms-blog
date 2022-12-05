import Image from "next/image";
import React from "react";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { ProfileHeaderDiv } from "./styles/profileHeader.style";

const ProfileHeader = () => {
  return (
    <ProfileHeaderDiv>
      <div className="profileHeadeWrapper">
        <Image src={Profile} alt="" className="profileHeadeWrapper__profile" />
      </div>
      <div className="profileHeadeWrapper_profileText">
        <div className="profileHeadeWrapper_profileTextDetails">
          <h3>Joshua Ejike</h3>
          <p>Software developer</p>
        </div>
        <div className="profileHeadeWrapper_profileTextEdit">
          <p>Edit Profile</p>
        </div>
      </div>
    </ProfileHeaderDiv>
  );
};

export default ProfileHeader;
