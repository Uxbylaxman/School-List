import React, { useEffect, useState } from "react";

const SchoolList = ({ onSelect }) => {
  const [schools, setSchools] = useState([]);

  const [selectedSchool, setSelectedSchool] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://data.cityofnewyork.us/resource/s3k6-pzi2.json"
        );

        const data = await res.json();
        setSchools(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const handleSchoolClick = (school) => {
    setSelectedSchool(school);
    onSelect(school);
  };

  return (
    <div>
      <h2> NYC Schools</h2>

      <ul>
        {schools.map((school) => (
          <li key={school.dbn} onClick={() => handleSchoolClick(school)}>
            {school.school_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;
