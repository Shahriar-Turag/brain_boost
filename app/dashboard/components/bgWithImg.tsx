import React from "react";
import styles from "../styles/bgWithImg.module.css";
type Props = {};
// https://rainbowit.net/html/histudy/assets/images/bg/bg-image-22.jpg

export default function BgWithImg({}: Props) {
  return (
    <div className="w-5/6 rounded-lg h-96 mx-auto py-5 bg-[url('https://images.unsplash.com/photo-1470955233021-2c79a52e5034?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')]">
      <div className="w-3/4 mx-auto">
        <h5 className="text-2xl uppercase my-3 text-gray-400 font-bold">
          bootcamp instructor
        </h5>
        <h1 className="text-5xl uppercase text-purple-200 font-bold my-3">
          learn with john
        </h1>
        <div className={`border-2 w-1/2 px-4 py-2 my-6 ${styles.pointedDiv}`}>
          <h4 className="text-xl uppercase text-white font-bold">
            Work - travel - lifestyle
          </h4>
        </div>
      </div>
      {/* profile image */}
      <div className="flex justify-between px-20 items-end">
        <div className="flex items-center">
          {/* avatar */}
          <div className="">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-white ring-offset-4">
                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
              </div>
            </div>
          </div>
          {/* name review */}
          <div className="text-white mx-6 font-bold ">
            <h5>John Due</h5>
            <div className="flex items-center">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />

                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />

                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <p className="ms-1">(15 reviews)</p>
            </div>
          </div>
        </div>
        <div>
          <button className={styles.button}>Create new course</button>
        </div>
      </div>
    </div>
  );
}
