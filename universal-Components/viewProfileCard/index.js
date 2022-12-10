import Image from "next/image";
import React from "react";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { ViewProfileStyle } from "./styles/styles";
import { BsThreeDots } from "react-icons/bs";
const ViewProfileCard = () => {
  return (
    <ViewProfileStyle>
      <div className="cardListSearchBody">
        <div className="cardListSearchBodyImageWrapper">
          <div className="cardListSearchBodyImageBody">
            <Image src={Profile} alt="" className="cardListSearchBodyImage" />
          </div>
        </div>
        <div className="cardListSearchBodyUsername">
          <p>Ejke Joshua</p>
        </div>
        <div className="cardListSearchBodyNotificationList">
          <BsThreeDots />
        </div>
      </div>
      <div className="cardListSearchBody">
        <div className="cardListSearchBodyImageWrapper">
          <div className="cardListSearchBodyImageBody">
            <Image src={Profile} alt="" className="cardListSearchBodyImage" />
          </div>
        </div>
        <div className="cardListSearchBodyUsername">
          <p>Ejke Joshua</p>
        </div>
        <div className="cardListSearchBodyNotificationList">
          <BsThreeDots />
        </div>
      </div>
      <div className="cardListSearchBody">
        <div className="cardListSearchBodyImageWrapper">
          <div className="cardListSearchBodyImageBody">
            <Image src={Profile} alt="" className="cardListSearchBodyImage" />
          </div>
        </div>
        <div className="cardListSearchBodyUsername">
          <p>Ejke Joshua</p>
        </div>
        <div className="cardListSearchBodyNotificationList">
          <BsThreeDots />
          {/* <div className="cardListSearchBodyNotificationListSystem">10</div> */}
        </div>
      </div>
    </ViewProfileStyle>
  );
};

export default ViewProfileCard;
