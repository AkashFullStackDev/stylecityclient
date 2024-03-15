import "./banner.css";
import bannerImage from "/images/banner/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <div className="col-1">
          <p>Style yourself with</p>
          <h1>STYLECITY</h1>
        </div>
      </div>
      <img src={bannerImage} alt="banner_imager" />
    </div>
  );
};

export default Banner;
