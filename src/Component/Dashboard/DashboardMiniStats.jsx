"use client";

import React from "react";
import { Card, Row, Col } from "antd";
import {
  StarOutlined,
  FileTextOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

/* ---------------------------
   Mini chart component
--------------------------- */

const MiniChart = ({ color }) => {
  const data = [
    { v: 20 },
    { v: 35 },
    { v: 18 },
    { v: 45 },
    { v: 30 },
    { v: 55 },
    { v: 28 },
  ];

  return (
    <ResponsiveContainer width="100%" height={80}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={`g-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.4} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="v"
          stroke={color}
          strokeWidth={3}
          fill={`url(#g-${color})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

/* ---------------------------
   Single Card
--------------------------- */

const MiniStatCard = ({ icon, title, subtitle, value, color, percent }) => {
  return (
    <Card
      bodyStyle={{ padding: 20 }}
      style={{
        borderRadius: 16,
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
      }}
    >
      {/* Top section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", gap: 14 }}>
          {/* icon */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            {icon}
          </div>

          <div>
            <div style={{ fontWeight: 600 }}>{title}</div>
            <div style={{ fontSize: 13, color: "#6b7280" }}>{subtitle}</div>
          </div>
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          {value}
        </div>
      </div>

      {/* Chart + text */}
      <Row align="middle">
        <Col span={14}>
          <MiniChart color={color} />
        </Col>

        <Col span={10} style={{ paddingLeft: 12 }}>
          <div
            style={{
              color,
              fontWeight: 600,
            }}
          >
            {percent} more
          </div>
          <div style={{ fontSize: 13, color: "#6b7280" }}>from last week</div>
        </Col>
      </Row>
    </Card>
  );
};

/* ---------------------------
   MAIN COMPONENT
--------------------------- */

const DashboardMiniStats = () => {
  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} md={12} lg={8}>
        <MiniStatCard
          icon={<StarOutlined />}
          title="Tasks Completed"
          subtitle="22/35 completed"
          value="22/35"
          color="#3456db"
          percent="28%"
        />
      </Col>

      <Col xs={24} md={12} lg={8}>
        <MiniStatCard
          icon={<FileTextOutlined />}
          title="New Tasks"
          subtitle="5/20 completed"
          value="5/20"
          color="#16a34a"
          percent="34%"
        />
      </Col>

      <Col xs={24} md={12} lg={8}>
        <MiniStatCard
          icon={<ProjectOutlined />}
          title="Project Done"
          subtitle="20/30 completed"
          value="20/30"
          color="#ef4444"
          percent="42%"
        />
      </Col>
    </Row>
  );
};

export default DashboardMiniStats;
