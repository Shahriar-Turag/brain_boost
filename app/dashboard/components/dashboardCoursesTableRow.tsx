import React from "react";

type Props = {
  course: {
    id: number;
    courseName: string;
    enrolled: number;
    ratings: number;
    class: string;
  };
};

function DashboardTableRow({ course }: Props) {
  const {
    id,
    courseName,
    enrolled,
    ratings,
    class: courseClass,
  } = course || {};
  return (
    <tr>
      <td>{courseName}</td>
      <td>{enrolled}</td>
      <td>
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
      </td>
    </tr>
  );
}

export default DashboardTableRow;
