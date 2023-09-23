import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobs } from "../../../utils/localStorage";
import SingelAppledJob from "../../AppliedJob/SingelAppliedJob";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [allappliedJobs, setAllAppliedJob] = useState([]);

  useEffect(() => {
    const appliedjobId = getJobs();
    if (appliedjobId.length > 0) {
      const jobappled = jobs.filter((job) => appliedjobId.includes(job.id));
      setAllAppliedJob(jobappled);
    }
  }, [jobs]);
  return (
    <section>
      <div className="flex justify-center items-center w-full h-80">
        <h1 className="text-3xl text-color-dark font-extrabold">
          Applied Jobs
        </h1>
      </div>
      <div>
        {allappliedJobs.length > 0 ? (
          allappliedJobs.map((job) => (
            <SingelAppledJob key={job.id} job={job} />
          ))
        ) : (
          <p>No Applied Job</p>
        )}
      </div>
    </section>
  );
};

export default AppliedJob;
