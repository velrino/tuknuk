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
      width={200} 
      style={{ 
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          top: 32,
          left: 0,
      }}
    >
      {menu}
   </Layout.Sider>
   );
};

export default SideBar;