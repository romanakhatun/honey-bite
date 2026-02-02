import DashboardAnalytics from "@/Component/Dashboard/DashboardAnalytics";
import DashboardStats from "@/Component/Dashboard/DashboardStats";
import PageToolbar from "@/Component/Dashboard/PageToolbar";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <PageToolbar />
      <div style={{ padding: 24 }}>
        <DashboardStats />
      </div>

      <div style={{ padding: 24 }}>
        <DashboardAnalytics />
      </div>
    </div>
  );
};

export default Dashboard;
