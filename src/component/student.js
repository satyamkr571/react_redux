import React from "react";

import studentData from "./studentdata";
function Student() {
  return (
    <table style={{ border: "2px solid black" }}>
      <thead>
        <tr>
          <th>Serial No</th>
          <th>Name</th>
          <th> Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {studentData.map((Data, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{Data.student_name}</td>
            <td>{Data.student_age}</td>
            <td>{Data.student_add}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Student;
