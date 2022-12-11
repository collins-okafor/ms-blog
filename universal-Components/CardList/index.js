import Image from "next/image";
import Link from "next/link";
import React from "react";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { CardListDiv } from "./styles/cardList.style";
const CardList = () => {
  return (
    <CardListDiv>
      <Link
        className="cardListSearchBody"
        href="/dashboard/individual-notification"
      >
        <div className="cardListSearchBodyImageWrapper">
          <div className="cardListSearchBodyImageBody">
            <Image src={Profile} alt="" className="cardListSearchBodyImage" />
          </div>
        </div>
        <div className="cardListSearchBodyUsername">
          <p>Ejke Joshua</p>
        </div>
        <div className="cardListSearchBodyNotificationList">
          <div className="cardListSearchBodyNotificationListSystem">10</div>
        </div>
      </Link>
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
          <div className="cardListSearchBodyNotificationListSystem">10</div>
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
          <div className="cardListSearchBodyNotificationListSystem">10</div>
        </div>
      </div>
    </CardListDiv>
  );
};

export default CardList;
