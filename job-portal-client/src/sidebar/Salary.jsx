import React from "react";
import Button from "./Button";
import Inputfield from "./../components/Inputfield";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div>
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="yearly" title="yearly" />
      </div>
      <div>
        <Inputfield
          type="radio"
          name="test"
          title=" All"          
          value=""
          onChange={handleChange}
        />
        <Inputfield
          name="test1"
          title=" < 30000k"
          value={30}
          onChange={handleChange}
        />
        <Inputfield
          name="test1"
          title=" < 40000k"
          value={40}
          onChange={handleChange}
        />
        <Inputfield
          name="test1"
          title=" < 50000k"
          value={50}
          onChange={handleChange}
        />
        <Inputfield
          name="test1"
          title=" < 80000k"
          value={80}
          onChange={handleChange}
        />
        <Inputfield
          name="test1"
          title=" < 100000k"
          value={100}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Salary;
