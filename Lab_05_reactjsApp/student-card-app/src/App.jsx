import React from "react";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <StudentCard
        name="Ali Khan"
        rollNo="101"
        department="CS"
        university="PUCIT"
        color="#ffdddd"
      />
      <StudentCard
        name="Sara Ahmed"
        rollNo="102"
        department="IT"
        university="PUCIT"
        color="#ddffdd"
      />
      <StudentCard
        name="Hamza Ali"
        rollNo="103"
        department="SE"
        university="PUCIT"
        color="#ddddff"
      />
    </div>
  );
}

export default App;