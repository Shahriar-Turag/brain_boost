import React from "react";
import DashboardSidebar from "./dashboardSidebar";
import DashboardContent from "./dashboardContent";

type Props = {};

export default function DashboardContainer({}: Props) {
  return (
    <div>
      <div className="drawer lg:drawer-open items-start justify-start">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <DashboardContent />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <DashboardSidebar />
        </div>
      </div>
    </div>
  );
}
