import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobs } from "../../../utils/localStorage";
import SingelAppledJob from "../../AppliedJob/SingelAppliedJob";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [allappliedJobs, setAllAppliedJob] = useState([]);
  const [displayedJobs, setDisplayedJob] = useState([]);

  useEffect(() => {
    const appliedjobId = getJobs();
    if (appliedjobId.length > 0) {
      const jobappled = jobs.filter((job) => appliedjobId.includes(job.id));
      setAllAppliedJob(jobappled);
      setDisplayedJob(jobappled);
    }
  }, [jobs]);

  const handelfilter = (type) => {
    if (type == "all") {
      setDisplayedJob(allappliedJobs);
      allappliedJobs.filter((job) => job.o);
    } else if (type == "remote") {
      const remote = allappliedJobs.filter(
        (job) => job.remote_or_onsite == "Remote"
      );
      setDisplayedJob(remote);
    } else if (type == "onsite") {
      const onsite = allappliedJobs.filter(
        (job) => job.remote_or_onsite == "Onsite"
      );
      setDisplayedJob(onsite);
    }
  };
  return (
    <section>
      <div className="flex justify-center items-center w-full h-80">
        <h1 className="text-3xl text-color-dark font-extrabold">
          Applied Jobs
        </h1>
      </div>
      <div className="flex justify-end">
        <select className="select select-bordered w-full max-w-xs">
          <option hidden>Filter</option>
          <option onClick={() => handelfilter("all")}>All</option>
          <option onClick={() => handelfilter("remote")}>Remote</option>
          <option onClick={() => handelfilter("onsite")}>OnSite</option>
        </select>
      </div>
      <div>
        {displayedJobs.length > 0 ? (
          displayedJobs.map((job) => <SingelAppledJob key={job.id} job={job} />)
        ) : (
          <p>No Applied Job</p>
        )}
      </div>
    </section>
  );
};

export default AppliedJob;
