import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
  } = data;
  return (
    <div>
      <section className="card">
        <Link to="/" className="flex flex-col gap-4 sm:flex-row items-start">
          <img className="" src={companyLogo} alt="" />
          <div>
            <h4 className="text-primary mb-1">{companyName}</h4>
            <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>
            <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
              <span className="flex item-center gap-2">{jobLocation}</span>
              <span className="flex item-center gap-2">{employmentType}</span>
              <span className="flex item-center gap-2">
                {minPrice}k-{maxPrice}k
              </span>
              <span className="flex item-center gap-2">{postingDate}</span>
            </div>
            <p className="text-base">{description}</p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Card;
