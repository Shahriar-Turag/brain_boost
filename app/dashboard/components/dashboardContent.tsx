import React from "react";
import DashboardCard from "./dashboardCard";
import { AiOutlineRead, AiOutlineGift, AiOutlineBook } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";
import { MdAttachMoney } from "react-icons/md";
type Props = {};

function DashboardContent({}: Props) {
  const cardArr = [
    {
      id: 1,
      icon: <AiOutlineBook color="#2F57EF" size={30} />,
      number: 30,
      bgColor: "bg-[#E4E9FD]",
      iconAndTextColor: "text-[#2F57EF]",
      iconContainerColor: "bg-[#CCD6FB]",
      subTitleColor: "text-[#B4C1F8]",
    },
    {
      id: 2,
      icon: <FiMonitor color="#B966E7" size={30} />,
      number: 42,
      bgColor: "bg-[#F6EBFC]",
      iconAndTextColor: "text-[#B966E7]",
      iconContainerColor: "bg-[#EEDAF9]",
      subTitleColor: "text-[#D7AAF1]",
    },
    {
      id: 3,
      icon: <SlPeople color="#800080" size={30} />,
      number: 17,
      bgColor: "bg-[#EFDEEF]",
      iconAndTextColor: "text-[#800080]",
      iconContainerColor: "bg-[#E1C1E1]",
      subTitleColor: "text-[#CA93CA]",
    },
    {
      id: 4,
      icon: <MdAttachMoney color="#DB7093" size={30} />,
      number: 99,
      bgColor: "bg-[#FAECF1]",
      iconAndTextColor: "text-[#DB7093]",
      iconContainerColor: "bg-[#F5E7ED]",
      subTitleColor: "text-[#EBB0C3]",
    },
    {
      id: 5,
      icon: <AiOutlineRead color="#FF8F3C" size={30} />,
      number: 55,
      bgColor: "bg-[#FFF8F3]",
      iconAndTextColor: "text-[#FF8F3C]",
      iconContainerColor: "bg-[#FFF1E8]",
      subTitleColor: "text-[#FFC497]",
    },
    {
      id: 6,
      icon: <AiOutlineGift color="#E9967A" size={30} />,
      number: 10,
      bgColor: "bg-[#FCF1EE]",
      iconAndTextColor: "text-[#E9967A]",
      iconContainerColor: "bg-[#F9E5DF]",
      subTitleColor: "text-[#F8DDD5]",
    },
  ];
  return (
    <div className="px-6">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14">
        {/* cards */}
        {cardArr.map((item) => (
          <DashboardCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default DashboardContent;
