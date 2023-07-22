import React from "react";
import { AiOutlineRead } from "react-icons/ai";
import styles from "../styles/dashboardCard.module.css";
type Props = {
  item: {
    id: number;
    icon: JSX.Element;
    number: number;
    bgColor: string;
    iconAndTextColor: string;
    iconContainerColor: string;
    subTitleColor: string;
  };
};

function DashboardCard({ item }: Props) {
  const {
    icon,
    bgColor,
    iconAndTextColor,
    iconContainerColor,
    id,
    number,
    subTitleColor,
  } = item || {};
  return (
    <div
      className={`card w-64 ${bgColor} hover:shadow-xl hover:scale-105 transition-all duration-300`}
    >
      <div className={`card-body items-center`}>
        {/* icon */}
        <div
          className={`${styles.dashboardCard__iconContainer} flex items-center justify-center mt-5 ${iconContainerColor}`}
        >
          {icon}
        </div>
        <h1 className={`text-5xl font-bold my-5 ${iconAndTextColor}`}>
          {number}
        </h1>
        <p className={`uppercase text-sm my-5 font-semibold ${subTitleColor}`}>
          ENROLLED COURSES
        </p>
      </div>
    </div>
  );
}

export default DashboardCard;
