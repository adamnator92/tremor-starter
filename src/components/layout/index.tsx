// https://reacthustle.com/blog/nextjs-react-responsive-collapsible-sidebar-tailwind

import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = () => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <main
      className={classNames({
        "grid bg-zinc-100 min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}
      />

      <div className="">
        <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />

        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
