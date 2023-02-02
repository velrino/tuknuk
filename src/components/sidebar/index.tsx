import React from "react";
import { Layout } from "antd";
import "./sidebar.scss"

const SideBar = ({ menu }:any) => {
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
   </Layout.Sider>
   );
};

export default SideBar;