import Image from "next/image";
import React from "react";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { ViewProfileStyle } from "./styles/styles";
import { BsThreeDots } from "react-icons/bs";
const ViewProfileCard = () => {
  return (
    <ViewProfileStyle>
      {followers.map((user, id) => (
        <div className="cardListSearchBody" key={id}>
          <div className="cardListSearchBodyImageWrapper">
            <div className="cardListSearchBodyImageBody">
              <Image src={Profile} alt="" className="cardListSearchBodyImage" />
            </div>
          </div>
          <div className="cardListSearchBodyUsername">
            <p>{user.userName}</p>
          </div>
          <div className="cardListLink">
            <a href={user.link}>view profile</a>
          </div>
        </div>
      ))}
    </ViewProfileStyle>
  );
};

const followers = [
  {
    profileImage: "",
    userName: "John Wick",
    link: "#",
  },
  {
    profileImage: "",
    userName: "Joshua Ejike",
    link: "#",
  },
  {
    profileImage: "",
    userName: "Emeka Praise",
    link: "#",
  },
  {
    profileImage: "",
    userName: "ZealsDev",
    link: "#",
  },
];
export default ViewProfileCard;
