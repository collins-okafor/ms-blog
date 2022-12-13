import React from "react";
import IndividualNotificationPage from "../../components/Notification/individual-notification";
import StoriesPage from "../../components/Stories";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";

const IndividualNotification = () => {
  return (
    <DashbaordPageWrapper>
      <IndividualNotificationPage />
    </DashbaordPageWrapper>
  );
};

export default IndividualNotification;
