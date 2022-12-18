import React, { useEffect } from "react";
import DashboardPage from "../../components/Dashboard";
import DashbaordPageWrapper from "../../universal-Components/DashobardPageWrapper";

const Dashboard = () => {
  return (
    <DashbaordPageWrapper>
      <DashboardPage />
    </DashbaordPageWrapper>
  );
};

Dashboard.auth = true;

export default Dashboard;
