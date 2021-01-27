import "./sidebar.css";
import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Sidebar(props) {
  return <ProSidebar id="sidebar">{props.children}</ProSidebar>;
}

export { Sidebar };
