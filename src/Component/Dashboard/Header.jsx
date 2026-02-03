"use client";

import React from "react";
import { Layout, Button, Avatar, Badge, Space, Dropdown, Grid } from "antd";
import {
  AiOutlineClockCircle,
  AiOutlineBell,
  AiOutlinePlus,
} from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GoScreenFull } from "react-icons/go";
import { CgMenuLeft } from "react-icons/cg";
import { BsMoon } from "react-icons/bs";
import Image from "next/image";

import Notifications from "./Dropdown/Notifications";
import Profile from "./Dropdown/Profile";
import Timesheet from "./Dropdown/Timesheet";
import Languages from "./Dropdown/Languages";

const { Header: AntHeader } = Layout;
const { useBreakpoint } = Grid;

const Header = ({ onToggleSidebar }) => {
  const screens = useBreakpoint();

  return (
    <AntHeader
      style={{
        background: "#fff",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Space size={16}>
        <Button
          type="text"
          icon={<CgMenuLeft size={24} />}
          onClick={onToggleSidebar}
        />

        {screens.md && (
          <Button type="primary" shape="circle" icon={<AiOutlinePlus />} />
        )}
        {screens.md && <Button style={{ fontWeight: 600 }}>MEGA MENU</Button>}
      </Space>

      <Space size={20}>
        <CiSearch size={20} />

        <Dropdown trigger={["hover"]} popupRender={() => <Languages />}>
          <Image src="/assets/flags/us.svg" alt="" width={22} height={16} />
        </Dropdown>

        <GoScreenFull size={20} />
        <BsMoon size={20} />

        <Dropdown trigger={["hover"]} popupRender={() => <Timesheet />}>
          <Badge
            count={2}
            style={{ backgroundColor: "#17c666", verticalAlign: "middle" }}
          >
            <AiOutlineClockCircle size={20} style={{ cursor: "pointer" }} />
          </Badge>
        </Dropdown>

        <Dropdown trigger={["hover"]} popupRender={() => <Notifications />}>
          <Badge count={3} style={{ verticalAlign: "middle" }}>
            <AiOutlineBell size={20} style={{ cursor: "pointer" }} />
          </Badge>
        </Dropdown>

        <Dropdown trigger={["hover"]} popupRender={() => <Profile />}>
          <Avatar src="/assets/avatar.png" />
        </Dropdown>
      </Space>
    </AntHeader>
  );
};

export default Header;
