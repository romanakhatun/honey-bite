"use client";

import React from "react";
import { Grid } from "antd";

import DashboardAnalytics from "@/Component/Dashboard/DashboardAnalytics";
import DashboardBottomCards from "@/Component/Dashboard/DashboardBottomCards";
import DashboardLeads from "@/Component/Dashboard/DashboardLeads";
import DashboardMiniStats from "@/Component/Dashboard/DashboardMiniStats";
import DashboardStats from "@/Component/Dashboard/DashboardStats";

const { useBreakpoint } = Grid;

const Dashboard = () => {
  const screens = useBreakpoint();
  const padding = screens.md ? 24 : 8;

  return (
    <div>
      <div style={{ padding }}>
        <DashboardStats />
      </div>

      <div style={{ padding }}>
        <DashboardAnalytics />
      </div>

      <div style={{ padding }}>
        <DashboardMiniStats />
      </div>

      <div style={{ padding }}>
        <DashboardLeads />
      </div>

      <div style={{ padding }}>
        <DashboardBottomCards />
      </div>
    </div>
  );
};

export default Dashboard;
