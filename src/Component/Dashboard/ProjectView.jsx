"use client";

import React, { useState } from "react";
import { Card, Tabs, Button, Space, Avatar, Badge, Typography } from "antd";
import {
  CheckOutlined,
  CalendarOutlined,
  BarChartOutlined,
  ClockCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ProjectOverview from "./ ProjectOverview";

const { Title, Text } = Typography;

const members = [
  "/assets/avatar.png",
  "/assets/avatar.png",
  "/assets/avatar.png",
  "/assets/avatar.png",
];

const ProjectView = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const HeaderSection = () => (
    <Card
      style={{
        borderRadius: 16,
        marginBottom: 20,
      }}
    >
      <Space
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {/* Left */}
        <Space orientation="vertical" size={6}>
          <Space align="center">
            <Title level={4} style={{ margin: 0 }}>
              Duralux | CRM Applications & Admin Dashboard
            </Title>

            <Badge
              count="In Progress"
              style={{
                background: "#e6f0ff",
                color: "#1677ff",
                fontWeight: 600,
              }}
            />
          </Space>

          <Space>
            <Button>CRM DASHBOARD</Button>

            <Avatar.Group maxCount={4}>
              {members.map((m, i) => (
                <Avatar key={i} src={m} />
              ))}
            </Avatar.Group>

            <Text type="secondary">24+ members</Text>
          </Space>
        </Space>

        {/* Right */}
        <Space>
          <Button icon={<CheckOutlined />} />
          <Button icon={<CalendarOutlined />} />
          <Button icon={<BarChartOutlined />} />
          <Button
            type="primary"
            icon={<ClockCircleOutlined />}
            style={{
              background: "#22c55e",
              borderColor: "#22c55e",
              fontWeight: 600,
            }}
          >
            START TIMER
          </Button>
        </Space>
      </Space>
    </Card>
  );
  const OverviewEmpty = () => (
    <Card
      style={{
        height: 520,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
      }}
    >
      <Space orientation="vertical" align="center" size={12}>
        <Title level={4} style={{ margin: 0 }}>
          No activity yet!
        </Title>

        <Text type="secondary">There is no activity on this project</Text>

        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="large"
        />
      </Space>
    </Card>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <ProjectOverview />;

      case "activity":
        return <OverviewEmpty />;

      case "timesheets":
        return <OverviewEmpty />;

      case "milestones":
        return <OverviewEmpty />;

      case "discussions":
        return <OverviewEmpty />;

      default:
        return null;
    }
  };

  return (
    <>
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        size="large"
        items={[
          { key: "overview", label: "Overview" },
          { key: "activity", label: "Activity" },
          { key: "timesheets", label: "Timesheets" },
          { key: "milestones", label: "Milestones" },
          { key: "discussions", label: "Discussions" },
        ]}
      />

      {renderContent()}
    </>
  );
};

export default ProjectView;
