import React from "react";

const MyBids = () => {
  return (
    <div className="overflow-x-auto px-20 py-10">
      <table className="table table-xs">
        <thead className="text-xl">
          <tr>
            <th></th>
            <th>Job title</th>
            <th> Email</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>pending</th>
          </tr>
        </thead>
        <tbody>
          <tr className="font-bold">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyBids;
