import React from "react";
import CardList from "../../universal-Components/CardList";
import Ads from "../../universal-Components/postAdsStructure/ads";
import { NotificationDiv } from "./styles/notification.style";

const NotificationPage = () => {
  return (
    <NotificationDiv>
      <div className="notificationHeader">
        <h3>Notifications</h3>
      </div>
      <div className="notificationContainer">
        <div className="notificationContainerCard">
          <CardList />
        </div>
        <div className="notificationContainerAds">
          <Ads />
        </div>
      </div>
    </NotificationDiv>
  );
};

export default NotificationPage;
