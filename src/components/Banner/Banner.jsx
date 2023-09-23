import bannerImg from "../../assets/user.png";
const Banner = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-2xl px-3 md:text-5xl lg:text-7xl flex flex-col lg:space-y-7 font-bold text-color-dark">
          <span>One Step</span>
          <span>Closer To Your</span>
          <span className="text-box">Dream Job</span>
          <p className="text-color-dark-3 text-lg font-normal">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <div className="mt-0 pt-0 ">
            <button className="btn bg-gradient-to-br from-[#7E90FE] to-[#9873FF] rounded-lg text-white  px-5 py-4">
              Get Started
            </button>
          </div>
        </div>
        {/* //image  */}
        <div className="hidden md:block">
          <img src={bannerImg} alt="" width={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
