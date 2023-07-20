import React from "react";
import DashboardTableRow from "./dashboardCoursesTableRow";

type Props = {};

export default function DashboardCourses({}: Props) {
  const coursesArr = [
    {
      id: 1,
      courseName: "Introduction to Programming",
      enrolled: 120,
      ratings: 4.5,
      class: "active",
    },
    {
      id: 2,
      courseName: "Web Development 101",
      enrolled: 85,
      ratings: 4.8,
      class: "active",
    },
    {
      id: 3,
      courseName: "Machine Learning Fundamentals",
      enrolled: 75,
      ratings: 4.2,
      class: "active",
    },
    {
      id: 4,
      courseName: "Data Science Essentials",
      enrolled: 110,
      ratings: 4.6,
      class: "active",
    },
    {
      id: 5,
      courseName: "UI/UX Design Basics",
      enrolled: 65,
      ratings: 4.3,
      class: "active",
    },
    {
      id: 6,
      courseName: "Digital Marketing Mastery",
      enrolled: 95,
      ratings: 4.7,
      class: "active",
    },
  ];
  return (
    <div className="my-16 p-10 mx-6 rounded-lg shadow-xl">
      <h1 className="text-xl mb-6 font-bold">My Courses</h1>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Enrolled</th>
              <th>Ratings</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {coursesArr.map((course) => (
              <DashboardTableRow key={course.id} course={course} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
