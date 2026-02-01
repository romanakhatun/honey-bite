import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "@/Component/Dashboard/Header";

const DashboardLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Header />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
};

export default DashboardLayout;
