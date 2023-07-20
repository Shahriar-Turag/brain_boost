import React from "react";
import BgWithImg from "./components/bgWithImg";
import GradiantBg from "./components/gradientBg";
import DashboardContainer from "./components/dashboardContainer";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div>
      <div className="relative">
        {/* top bg */}
        <div className="">
          <GradiantBg />
        </div>
        {/* abs bg with image */}
        <div className="absolute left-0 right-0 bottom-[-180px]">
          <BgWithImg />
        </div>
      </div>

      {/* dashboard */}
      {/* adjust the margin for relative and absolute styles */}
      <div className="mt-52 px-32">
        <DashboardContainer />
      </div>
    </div>
  );
}
