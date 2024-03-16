import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";
import "./carousel.css";

const Carousel = () => {
  return (
    <div className="grid-container">
      <div className="box1">
        <Carousel1 />
      </div>
      <div>
        <div className="box2">
          <Carousel3 />
        </div>
        <div className="box3">
          <Carousel3 />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
