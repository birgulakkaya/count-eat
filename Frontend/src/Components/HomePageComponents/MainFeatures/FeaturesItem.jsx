import PropTypes from "prop-types";

const FeaturesItem = ({ image, title, description }) => {
  return (
    <div className="features-div">
      <div className="features-image">
        <figure>
          <img src={image} />
        </figure>
      </div>
      <div className="features-content">
        <div className="title">
          <p className="features-item-title">{title}</p>
        </div>
      </div>
      <div className="features-desc">
        <p className="features-description">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesItem;

FeaturesItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
