import SchoolDetail from "./SchoolDetail";
import SchoolList from "./SchoolList";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const handleSelectedSchool = (school) => {
    console.log(school);
    setSelectedSchool(school);
  };
  return (
    <div className="App">
      <SchoolList onSelect={handleSelectedSchool} />
      <SchoolDetail school={selectedSchool} />
    </div>
  );
}
