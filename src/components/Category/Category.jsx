import PropTypes from "prop-types";
const Category = ({ category }) => {
  const { logo, category_name, availability } = category || {};
  return (
    <div className="category-div p-8 w-80 h-64">
      <div className="category-logo">
        <img src={logo} alt={category_name} />
      </div>
      <div className="mt-10">
        <h1 className="text-color-extraDark text-xl font-bold mb-2">
          {category_name}
        </h1>
        <span className="text-lg font-medium text-[#a3a3a3]">
          {availability}
        </span>
      </div>
    </div>
  );
};
Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
