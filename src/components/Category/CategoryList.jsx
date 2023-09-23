import { useEffect, useState } from "react";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="py-20">
      <SectionTitle
        title={"Job Category List"}
        subtitle={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      />
      <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
