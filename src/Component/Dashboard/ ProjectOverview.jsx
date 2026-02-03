"use client";

import React, { useState } from "react";
import {
  Card,
  Space,
  Typography,
  Avatar,
  Progress,
  Button,
  Dropdown,
  Menu,
  Row,
  Col,
} from "antd";
import {
  CheckOutlined,
  CalendarOutlined,
  BarChartOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
  FileTextOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const projectList = [
  "#01 - CRM Applications - G.Cute",
  "#02 - Admin Dashboard - A.Cantones",
  "#03 - Webapps Applications - M.Hanvey",
  "#04 - Dashboard Redesign - K.Hune",
  "#05 - Applications Debugging - V.Maton",
];

const StatCard = ({ title, value, color, icon }) => (
  <Card
    style={{
      borderRadius: 14,
      height: 150,
    }}
  >
    <Space orientation="vertical">
      <Avatar
        size={44}
        style={{ background: color + "20", color }}
        icon={icon}
      />
      <Text strong style={{ color }}>
        {title}
      </Text>
      <Title level={4} style={{ margin: 0 }}>
        {value}
      </Title>
    </Space>
  </Card>
);

const ProjectOverview = () => {
  const [selectedProject, setSelectedProject] = useState(projectList[0]);

  const menu = (
    <Menu
      items={projectList.map((p, i) => ({
        key: i,
        label: p,
        onClick: () => setSelectedProject(p),
      }))}
    />
  );

  return (
    <Space orientation="vertical" size={20} style={{ width: "100%" }}>
      <Card style={{ borderRadius: 16 }}>
        <Space
          style={{
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* LEFT */}
          <Space orientation="vertical" size={8}>
            <Title level={4} style={{ margin: 0 }}>
              Duralux | CRM Applications & Admin Dashboard
            </Title>

            <Space>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button>{selectedProject}</Button>
              </Dropdown>

              <Avatar.Group>
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} src="/assets/avatar.png" />
                ))}
              </Avatar.Group>

              <Text type="secondary">24+ members</Text>
            </Space>
          </Space>

          {/* RIGHT */}
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
      <Row gutter={20}>
        {/* LEFT BIG INFO */}
        <Col xs={24} lg={14}>
          <Card style={{ borderRadius: 14 }}>
            <Space orientation="vertical" size={18} style={{ width: "100%" }}>
              <Progress percent={78} showInfo={false} size={8} />

              <Text strong>16/25 Tasks Completed (78%)</Text>

              <Space orientation="vertical">
                <Text>
                  <b>Billing Type</b>
                </Text>
                <Text type="secondary">Project Hours</Text>

                <Text>
                  <b>Customer</b>
                </Text>
                <Text type="secondary">Green Cute</Text>
              </Space>
            </Space>
          </Card>
        </Col>

        {/* RIGHT CARDS */}
        <Col xs={24} lg={10}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <StatCard
                title="Logged Hours"
                value="00:00"
                color="#1677ff"
                icon={<ArrowRightOutlined />}
              />
            </Col>

            <Col span={12}>
              <StatCard
                title="Billable Hours"
                value="00:00"
                color="#fa8c16"
                icon={<FileTextOutlined />}
              />
            </Col>

            <Col span={12}>
              <StatCard
                title="Approved Tasks"
                value="16"
                color="#22c55e"
                icon={<CheckOutlined />}
              />
            </Col>

            <Col span={12}>
              <StatCard
                title="Rejected Tasks"
                value="2"
                color="#ff4d4f"
                icon={<CloseOutlined />}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Space>
  );
};

export default ProjectOverview;
