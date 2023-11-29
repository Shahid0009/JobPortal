import React from "react";

const Inputfield = ({ handleChange, value, title, name }) => {
  return (
    <div>
      <label className="sidebar-lable=container">
        <input
          type="radio"
          name={name}
          value={value}
          id="text"
          onChange={handleChange}
        />
        <span className="checkmark"></span>{title}
      </label>
    </div>
  );
};

export default Inputfield;
