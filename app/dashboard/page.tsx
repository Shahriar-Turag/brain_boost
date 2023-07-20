import React from "react";
import BgWithImg from "./components/bgWithImg";
import GradiantBg from "./components/gradientBg";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div>
      <div>
        {/* top bg */}
        <div className="relative">
          <GradiantBg />
        </div>
        {/* abs bg with image */}
        <div className="absolute left-0 right-0 bottom-[-180px]">
          <BgWithImg />
        </div>
      </div>
    </div>
  );
}
