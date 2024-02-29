import React from "react";
const SchoolDetail = ({ school }) => {
  return (
    <div>
      {school ? (
        <div>
          <h2>{school.school_name}</h2>
          <p>{school.overview_paragraph}</p>
        </div>
      ) : (
        <p>No School Selected</p>
      )}
    </div>
  );
};

export default SchoolDetail;
