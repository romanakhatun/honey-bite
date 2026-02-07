"use client";

import React, { useState, useMemo } from "react";
import { Table, Avatar, Space, Select, Input, Button, Pagination } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import projects from "@/data/projects.json";
import Image from "next/image";

const { Option } = Select;
const { Search } = Input;

const statusColors = {
  "In Progress": "#3b82f6",
  "Not Started": "#f59e0b",
  "On Hold": "#22c55e",
  Declined: "#ef4444",
  Finished: "#06b6d4",
  Active: "#16a34a",
};

const statusOptions = Object.keys(statusColors);

export default function ProjectsTable() {
  const [pageSize, setPageSize] = useState(10);
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState(projects);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleSearch = (val) => {
    const filtered = projects.filter((p) =>
      p.name.toLowerCase().includes(val.toLowerCase()),
    );
    setData(filtered);
    setCurrent(1);
  };

  const paginatedData = useMemo(() => {
    const start = (current - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, current, pageSize]);

  const columns = [
    {
      title: "Project Name",
      render: (_, r) => (
        <Space>
          <Image src={r.logo} width={48} height={48} alt="Logo" />
          <div>
            <b>{r.name}</b>
            <div style={{ fontSize: 12, color: "#888" }}>{r.description}</div>
          </div>
        </Space>
      ),
    },
    {
      title: "Customer",
      render: (_, r) => (
        <Space>
          <Avatar src={r.customer.avatar} />
          {r.customer.name}
        </Space>
      ),
    },
    { title: "Start Date", dataIndex: "startDate" },
    { title: "End Date", dataIndex: "endDate" },
    {
      title: "Assigned",
      render: (_, r) => (
        <Space>
          <Avatar size="small" src={r.assigned.avatar} />
          {r.assigned.name}
        </Space>
      ),
    },
    {
      title: "Status",
      render: (_, r) => (
        <Select defaultValue={r.status} style={{ width: 150 }} showSearch>
          {statusOptions.map((s) => (
            <Option key={s} value={s}>
              <Space>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: statusColors[s],
                  }}
                />
                {s}
              </Space>
            </Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Actions",
      render: () => (
        <Space>
          <Button icon={<EyeOutlined />} />
          <Button icon={<EditOutlined />} />
          <Button danger icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ background: "#fff", padding: 20, borderRadius: 12 }}>
      {/* <Space
        style={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Space>
          Show
          <Select
            value={pageSize}
            style={{ width: 80 }}
            onChange={(v) => {
              setPageSize(v);
              setCurrent(1);
            }}
          >
            {[10, 20, 30, 40, 50].map((n) => (
              <Option key={n}>{n}</Option>
            ))}
          </Select>
          entries
        </Space>

        <Search
          placeholder="Search..."
          style={{ width: 250 }}
          onSearch={handleSearch}
        />
      </Space> */}

      <Space
        wrap
        style={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          gap: 12,
        }}
      >
        <Space wrap>
          Show
          <Select
            value={pageSize}
            style={{ width: 80 }}
            onChange={(v) => {
              setPageSize(v);
              setCurrent(1);
            }}
          >
            {[10, 20, 30, 40, 50].map((n) => (
              <Option key={n}>{n}</Option>
            ))}
          </Select>
          entries
        </Space>

        <Search
          placeholder="Search..."
          style={{
            width: "100%",
            maxWidth: 250,
          }}
          onSearch={handleSearch}
        />
      </Space>

      <Table
        columns={columns}
        dataSource={paginatedData}
        rowKey="id"
        pagination={false}
        scroll={{ x: "max-content" }}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
        }}
      />

      <Pagination
        style={{ marginTop: 16, textAlign: "right" }}
        current={current}
        pageSize={pageSize}
        total={data.length}
        onChange={(p) => setCurrent(p)}
        showSizeChanger={false}
      />
    </div>
  );
}
