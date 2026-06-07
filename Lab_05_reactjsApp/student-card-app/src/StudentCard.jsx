import React from "react";

function StudentCard({ name, rollNo, department, university, color }) {
  const cardStyle = {
    backgroundColor: color || "#f2f2f2",
    padding: "15px",
    margin: "10px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>Roll No: {rollNo}</p>
      <p>Department: {department}</p>
      <p>University: {university}</p>
    </div>
  );
}

export default StudentCard;