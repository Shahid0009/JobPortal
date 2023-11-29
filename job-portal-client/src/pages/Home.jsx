import React from "react";
import Banner from "./../components/Banner";
import { useState, useEffect } from "react";
import Card from "./../components/Card";
import Jobs from "./Jobs";
import Sidebar from "./../sidebar/Sidebar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerpage = 6;

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setisLoading(false);
      });
  }, []);
  // console.log(jobs);

  // handle input change
  const handelInpitChange = (e) => {
    setQuery(e.target.value);
  };

  // filter jobs by name

  const filterItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  console.log(filterItems);

  // Radio Filtering
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // buttons based filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // calculate index page

  const calculatePage = () => {
    const startIndex = currentPage - 1 + itemsPerpage;
    const endIndex = startIndex + itemsPerpage;
    return { startIndex, endIndex };
  };
  const nextPage = () => {
    if (currentPage < Math.ceil(filterItems.length / itemsPerpage)) {
      setcurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  // main function

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filterItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experirncelevel,
          salaryType,
          empolymentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          empolymentType === selected.toLowerCase()
      );
    }

    const { startIndex, endIndex } = calculatePage();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  console.log(query);
  return (
    <div>
      <Banner query={query} handelInpitChange={handelInpitChange} />
      <div className=" bg-[#dadade] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? (
            <p>Loading....</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3>{result.length} Jobs</h3>
              <p>No data found</p>
            </>
          )}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 gap-5">
              <button
                className="hover:underline"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>
                Pages {currentPage} of{" "}
                {Math.ceil(filterItems.length / itemsPerpage)}
              </span>
              <button
                className="hover:underline"
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filterItems.length / itemsPerpage)
                }
              >
                next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default Home;
