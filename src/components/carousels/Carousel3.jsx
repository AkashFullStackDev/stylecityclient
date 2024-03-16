import image1 from "/images/carousel/img21.jpg";
import image2 from "/images/carousel/img22.jpg";
import image3 from "/images/carousel/img23.jpg";
import image4 from "/images/carousel/img24.jpg";
import image5 from "/images/carousel/img25.jpg";
import image6 from "/images/carousel/img26.jpg";
import image7 from "/images/carousel/img27.jpg";

import "./carousel3.css";
import { useState } from "react";

const Carousel3 = () => {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState("0%");
  const [forward, setForward] = useState(true);

  if (forward) {
    for (let i = 0; i <= 7; i++) {
      setTimeout(() => {
        if (count === 6) {
          setForward(false);
        } else {
          setCount(count + 1);
          shiftImage(count);
        }
      }, 2000);
      console.log(count);
    }
  } else {
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        if (count === 0) {
          setForward(true);
        } else {
          setCount(count - 1);
          shiftImage(count);
        }
      }, 2000);
    }
  }

  const shiftImage = (count) => {
    switch (count) {
      case 0:
        setMargin("0%");
        break;
      case 1:
        setMargin("-500px");
        break;
      case 2:
        setMargin("-1000px");
        break;
      case 3:
        setMargin("-1500px");
        break;
      case 4:
        setMargin("-2000px");
        break;
      case 5:
        setMargin("-2500px");
        break;
      case 6:
        setMargin("-3000px");
        break;
      case 7:
        setMargin("-3500px");
        break;
      default:
        break;
    }
  };

  return (
    <div className="carousel3-container">
      <div className="carousel3-images-container ">
        <div className="carousel3-image" style={{marginLeft: margin}}>
          <img src={image1} alt="image1" />
        </div>
        <div className="carousel3-image">
          <img src={image2} alt="image2" />
        </div>
        <div className="carousel3-image">
          <img src={image3} alt="image3" />
        </div>
        <div className="carousel3-image">
          <img src={image4} alt="image4" />
        </div>
        <div className="carousel3-image">
          <img src={image5} alt="image5" />
        </div>
        <div className="carousel3-image">
          <img src={image6} alt="image6" />
        </div>
        <div className="carousel3-image">
          <img src={image7} alt="image7" />
        </div>
      </div>
    </div>
  );
};

export default Carousel3;
