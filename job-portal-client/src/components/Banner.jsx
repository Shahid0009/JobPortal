import React from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
const Banner = ({ query, handelInpitChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find Your <span className="text-blue">new Job</span>
      </h1>
      <p className=" text-black/70 mb-3 text-lg">
        Thousands of jobs in the computer science and technology sectors are
        waiting for you
      </p>
      <form>
        <div className=" flex justify-start gap-4 md:gap-1 flex-col md:flex-row">
          <div className="flex px-2 border">
            <FiSearch className="h-4 w-4 flex items-center" />
            <input
              onChange={handelInpitChange}
              value={query}
              type="text"
              placeholder="what position are you looking for"
              className="px-2 py-2 w-full"
            />
          </div>
          <div className="flex px-2 border">
            <FiMapPin className="h-4 w-4 flex items-center" />
            <input
              type="text"
              placeholder="search ny location"
              className="px-2 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue px-4 py-3 rounded-lg text-white"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
