import PropTypes from "prop-types";
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-color-dark">{title}</h2>
      <p className="py-2 text-sm text-color-gray">{subtitle}</p>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
