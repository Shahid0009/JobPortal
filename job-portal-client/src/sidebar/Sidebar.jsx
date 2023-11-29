import React from "react";
import Location from "./Location";
import JobPosting from "./JobPosting";
import Salary from "./Salary";

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className="space-y-5">
      <h3>Filters</h3>
      <Location handleChange={handleChange} />

      <Salary handleChange={handleChange} handleClick={handleClick} />
      <JobPosting handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;
