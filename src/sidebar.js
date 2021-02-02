import "./sidebar.css";
import React from "react";
import { ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Sidebar(props) {
  return <ProSidebar id="sidebar">{props.children}</ProSidebar>;
}

export { Sidebar };
