"use client";

import React from "react";
import { Card, Progress } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const StatCard = ({
  icon,
  value,
  total,
  title,
  bottomLabel,
  bottomValue,
  percent,
  color = "#1677ff",
}) => {
  return (
    <Card
      styles={{ body: { padding: 22 } }}
      style={{
        borderRadius: 16,
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
      }}
    >
      {/* TOP */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 28,
        }}
      >
        <div style={{ display: "flex", gap: 14 }}>
          {/* icon circle */}
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
            }}
          >
            {icon}
          </div>

          <div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              {value}/{total}
            </div>

            <div style={{ color: "#6b7280" }}>{title}</div>
          </div>
        </div>

        <MoreOutlined style={{ fontSize: 20, cursor: "pointer" }} />
      </div>

      {/* BOTTOM INFO */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 14,
          marginBottom: 8,
        }}
      >
        <span>{bottomLabel}</span>
        <span>{bottomValue}</span>
      </div>

      {/* PROGRESS */}
      <Progress
        percent={percent}
        showInfo={false}
        strokeColor={color}
        size="small"
      />
    </Card>
  );
};

export default StatCard;
