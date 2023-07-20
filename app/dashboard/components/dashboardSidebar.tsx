import React from "react";
import { BiHomeAlt, BiBookOpen, BiBookmark } from "react-icons/bi";
import { BsPerson, BsStar } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LuShoppingBag } from "react-icons/lu";
import styles from "../styles/dashboardSidebar.module.css";
type Props = {};

export default function DashboardSidebar({}: Props) {
  const navArr = [
    {
      id: 1,
      text: "Dashboard",
      icon: <BiHomeAlt size={20} />,
    },
    {
      id: 2,
      text: "My Profile",
      icon: <BsPerson size={20} />,
    },
    {
      id: 3,
      text: "Enrolled Courses",
      icon: <BiBookOpen size={20} />,
    },
    {
      id: 4,
      text: "Wishlist",
      icon: <BiBookmark size={20} />,
    },
    {
      id: 5,
      text: "Reviews",
      icon: <BsStar size={20} />,
    },
    {
      id: 6,
      text: "My Quiz Attempts",
      icon: <AiOutlineQuestionCircle size={20} />,
    },
    {
      id: 7,
      text: "Order History",
      icon: <LuShoppingBag />,
    },
  ];
  const insArr = [
    {
      id: 1,
      text: "My Courses",
      icon: <BiHomeAlt size={20} />,
    },
    {
      id: 2,
      text: "Announcements",
      icon: <BsPerson size={20} />,
    },
    {
      id: 3,
      text: "Quiz Attempts",
      icon: <BiBookOpen size={20} />,
    },
    {
      id: 4,
      text: "Assignments",
      icon: <BiBookmark size={20} />,
    },
  ];
  const userArr = [
    {
      id: 1,
      text: "Settings",
      icon: <BiHomeAlt size={20} />,
    },
    {
      id: 2,
      text: "Logout",
      icon: <BsPerson size={20} />,
    },
  ];
  return (
    <>
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-8 w-72 mb-24 text-base-content border-4 rounded-lg border-purple-400">
        {/* Sidebar content here */}
        {/* 1 */}
        <div className="mt-10">
          <p className="px-3 font-semibold mb-4 text-gray-400 uppercase">
            welcome jon due
          </p>
          {navArr.map((item) => (
            <>
              <li
                key={item.id}
                className="text-gray-500 my-2 font-semibold hover:bg-transparent active:bg-transparent"
              >
                <a
                  className={`hover:bg-transparent hover:text-blue-600 ${styles.sideNav__link}`}
                >
                  {item.icon}
                  {item.text}
                </a>
              </li>
              <hr className="w-[87%] mx-auto border-1" />
            </>
          ))}
        </div>
        {/* 2 */}
        <div className="mt-10">
          <p className="px-3 font-semibold mb-4 text-gray-400 uppercase">
            Instructor
          </p>
          {insArr.map((item) => (
            <>
              <li
                key={item.id}
                className="text-gray-500 my-2 font-semibold hover:bg-transparent active:bg-transparent"
              >
                <a
                  className={`hover:bg-transparent hover:text-blue-600 ${styles.sideNav__link}`}
                >
                  {item.icon}
                  {item.text}
                </a>
              </li>
              <hr className="w-[87%] mx-auto border-1" />
            </>
          ))}
        </div>
        {/* 3 */}
        <div className="mt-10">
          <p className="px-3 font-semibold mb-4 text-gray-400 uppercase">
            User
          </p>
          {userArr.map((item) => (
            <>
              <li
                key={item.id}
                className="text-gray-500 my-2 font-semibold hover:bg-transparent active:bg-transparent"
              >
                <a
                  className={`hover:bg-transparent hover:text-blue-600 ${styles.sideNav__link}`}
                >
                  {item.icon}
                  {item.text}
                </a>
              </li>
              <hr className="w-[87%] mx-auto border-1" />
            </>
          ))}
        </div>
      </ul>
    </>
  );
}
