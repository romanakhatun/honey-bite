"use client";
import React, { useState } from "react";
import { Breadcrumb, Button, Dropdown, Space, Checkbox, Divider } from "antd";
import { FilterOutlined, PlusOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

const dateOptions = [
  "Today",
  "Yesterday",
  "This Week",
  "Last Week",
  "This Month",
  "Last Month",
  "Custom Date",
];

const DateDropdown = ({ onSelect }) => (
  <div
    style={{
      width: 260,
      background: "#fff",
      borderRadius: 14,
      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      padding: 14,
    }}
  >
    {dateOptions.map((d, i) => (
      <div
        key={i}
        onClick={() => onSelect(d)}
        style={{
          padding: "12px 14px",
          borderRadius: 10,
          cursor: "pointer",
          fontWeight: 500,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f7ff")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        {d}
      </div>
    ))}
  </div>
);

const filterItems = ["Role", "Team", "Email", "Member", "Recommendation"];

const FilterDropdown = () => {
  const [checked, setChecked] = useState(filterItems);

  return (
    <div
      style={{
        width: 300,
        background: "#fff",
        borderRadius: 14,
        boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        padding: 18,
      }}
    >
      {filterItems.map((f) => (
        <div key={f} style={{ marginBottom: 12 }}>
          <Checkbox
            checked={checked.includes(f)}
            onChange={(e) =>
              setChecked((prev) =>
                e.target.checked ? [...prev, f] : prev.filter((x) => x !== f),
              )
            }
          >
            {f}
          </Checkbox>
        </div>
      ))}

      <Divider />

      <div style={{ padding: "8px 0", cursor: "pointer" }}>
        <PlusOutlined /> Create New
      </div>

      <div style={{ padding: "8px 0", cursor: "pointer" }}>
        <FilterOutlined /> Manage Filter
      </div>
    </div>
  );
};

const PageToolbar = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const last = segments[segments.length - 1] || "dashboard";

  const pageTitle = last.charAt(0).toUpperCase() + last.slice(1);

  return (
    <div
      style={{
        background: "#fff",
        padding: "14px 24px",
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        top: 64,
        zIndex: 5,
      }}
    >
      {/* LEFT SIDE */}
      <Space size={12}>
        <span
          style={{
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          {pageTitle}
        </span>

        <Breadcrumb
          items={[
            {
              title: <>Home</>,
            },
            {
              title: pageTitle,
            },
          ]}
        />
      </Space>

      {/* RIGHT SIDE */}
      <Space size={12}>
        {/* DATE */}
        <Dropdown
          trigger={["click"]}
          popupRender={() => (
            <DateDropdown onSelect={(d) => setRangeLabel(d)} />
          )}
        >
          <Button>Feb 01,26 - Feb 28,26</Button>
        </Dropdown>

        {/* FILTER */}
        <Dropdown trigger={["click"]} popupRender={() => <FilterDropdown />}>
          <Button icon={<FilterOutlined />}>FILTER</Button>
        </Dropdown>
      </Space>
    </div>
  );
};

export default PageToolbar;
