import Banner from "../../Banner/Banner";
import CategoryList from "../../Category/CategoryList";
import FeaturedJobList from "../../FeaturedJob/FeaturedJobList";

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <CategoryList />
      <FeaturedJobList />
    </div>
  );
};

export default Home;
