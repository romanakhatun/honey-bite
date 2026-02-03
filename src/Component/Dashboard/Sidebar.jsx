"use client";

import React, { useState } from "react";
import { Layout, Menu, Drawer, Grid } from "antd";
import {
  DashboardOutlined,
  BarChartOutlined,
  FileOutlined,
  AppstoreOutlined,
  DollarOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  const menuItems = [
    { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboards" },
    { key: "analytics", icon: <BarChartOutlined />, label: "Analytics" },
    { key: "reports", icon: <FileOutlined />, label: "Reports" },
    { key: "apps", icon: <AppstoreOutlined />, label: "Applications" },
    { key: "payment", icon: <DollarOutlined />, label: "Payment" },
    { key: "customers", icon: <UserOutlined />, label: "Customers" },
    { key: "settings", icon: <SettingOutlined />, label: "Settings" },
  ];

  /* ================= MOBILE DRAWER ================= */
  if (isMobile) {
    return (
      <Drawer
        placement="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        styles={{ body: { padding: 0 } }}
      >
        <Menu mode="inline" items={menuItems} style={{ height: "100%" }} />
      </Drawer>
    );
  }

  /* ================= DESKTOP SIDEBAR ================= */
  return (
    <Sider
      width={240}
      collapsedWidth={80}
      collapsed={collapsed}
      trigger={null}
      onMouseEnter={() => collapsed && setCollapsed(false)} // hover open
      onMouseLeave={() => !collapsed && setCollapsed(true)} // hover close
      style={{
        background: "#fff",
        borderRight: "1px solid #f0f0f0",
      }}
    >
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
        }}
      >
        {collapsed ? "D" : "DURALUX"}
      </div>

      <Menu mode="inline" items={menuItems} style={{ borderRight: 0 }} />
    </Sider>
  );
};

export default Sidebar;
