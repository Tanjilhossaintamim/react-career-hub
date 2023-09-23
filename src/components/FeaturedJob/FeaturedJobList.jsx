import { useEffect, useState } from "react";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import Job from "./Job";

const FeaturedJobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="py-4">
      <SectionTitle
        title={"Featured Jobs"}
        subtitle={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      />
      <div className="grid md:grid-cols-2 gap-5 my-10">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className="w-max mx-auto py-16">
        <button className="btn bg-gradient-to-br from-[#7E90FE] to-[#9873FF] rounded-lg text-white w-full">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobList;
