"use client";

import React from "react";
import { Row, Col } from "antd";
import {
  DollarOutlined,
  RiseOutlined,
  ProjectOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import StatCard from "./StatCard";

const DashboardStats = () => {
  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} md={12} lg={6}>
        <StatCard
          icon={<DollarOutlined />}
          value={45}
          total={76}
          title="Invoices Awaiting..."
          bottomLabel="Invoices Awaiting..."
          bottomValue="$5,569 (56%)"
          percent={56}
          color="#3b5bdb"
        />
      </Col>

      <Col xs={24} md={12} lg={6}>
        <StatCard
          icon={<RiseOutlined />}
          value={48}
          total={86}
          title="Converted Leads"
          bottomLabel="Converted Leads"
          bottomValue="52 Completed (63%)"
          percent={63}
          color="#f59e0b"
        />
      </Col>

      <Col xs={24} md={12} lg={6}>
        <StatCard
          icon={<ProjectOutlined />}
          value={16}
          total={20}
          title="Projects In Progress"
          bottomLabel="Projects In Progress"
          bottomValue="16 Completed (78%)"
          percent={78}
          color="#16a34a"
        />
      </Col>

      <Col xs={24} md={12} lg={6}>
        <StatCard
          icon={<LineChartOutlined />}
          value={46.59}
          total={"%"}
          title="Conversion Rate"
          bottomLabel="Conversion Rate"
          bottomValue="$2,254 (46%)"
          percent={46}
          color="#ef4444"
        />
      </Col>
    </Row>
  );
};

export default DashboardStats;
