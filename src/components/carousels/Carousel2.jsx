import image1 from "/images/carousel/img1.jpg";
import image2 from "/images/carousel/img2.jpg";
import image3 from "/images/carousel/img3.jpg";
import image4 from "/images/carousel/img4.jpg";
import image5 from "/images/carousel/img5.jpg";
import image6 from "/images/carousel/img6.jpg";
import image7 from "/images/carousel/img7.jpg";
import image8 from "/images/carousel/img8.jpg";
import image9 from "/images/carousel/img9.jpg";
import image10 from "/images/carousel/img10.jpg";
import image11 from "/images/carousel/img11.jpg";
import image12 from "/images/carousel/img12.jpg";
import image13 from "/images/carousel/img13.jpg";
import image14 from "/images/carousel/img14.jpg";
import image15 from "/images/carousel/img15.jpg";
import image16 from "/images/carousel/img16.jpg";
import image17 from "/images/carousel/img17.jpg";
import image18 from "/images/carousel/img18.jpg";
import image19 from "/images/carousel/img19.jpg";
import image20 from "/images/carousel/img20.jpg";

import "./carousel2.css";
import { useState } from "react";


const Carousel2 = () => {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState("0%");
  const [forward, setForward] = useState(true);

  if (forward) {
    for (let i = 0; i <= 20; i++) {
      setTimeout(() => {
        if (count === 20) {
          setForward(false);
        } else {
          setCount(count + 1);
          shiftImage(count);
        }
      }, 2000);
      console.log(count);
    }
  } else {
    for (let i = 0; i <20; i++) {
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
        setMargin("-125%");
        break;
      case 2:
        setMargin("-250%");
        break;
      case 3:
        setMargin("-375%");
        break;
      case 4:
        setMargin("-500%");
        break;
      case 5:
        setMargin("-625%");
        break;
      case 6:
        setMargin("-750%");
        break;
      case 7:
        setMargin("-875%");
        break;
      case 8:
        setMargin("-1000%");
        break;
      case 9:
        setMargin("-1125%");
        break;
      case 10:
        setMargin("-1250%");
        break;
      case 11:
        setMargin("-1375%");
        break;
      case 12:
        setMargin("-1500%");
        break;
      case 13:
        setMargin("-1625%");
        break;
      case 14:
        setMargin("-1750%");
        break;
      case 15:
        setMargin("-1875%");
        break;
      case 16:
        setMargin("-2000%");
        break;
      case 17:
        setMargin("-2125%");
        break;
      case 18:
        setMargin("-2250%");
      case 19:
        setMargin("-1375%");
        break;
      default:
        break;
    }
  }; 

  return (
    <div className="carousel2-container">
      <div className="carousel2-images-container">
        <div className="carousel2-image" style={{ marginTop: margin }}>
          <img src={image1} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image2} alt="image2" />
        </div>
        <div className="carousel2-image">
          <img src={image3} alt="image3" />
        </div>
        <div className="carousel2-image">
          <img src={image4} alt="image4" />
        </div>
        <div className="carousel2-image">
          <img src={image5} alt="image5" />
        </div>
        <div className="carousel2-image">
          <img src={image6} alt="image6" />
        </div>
        <div className="carousel2-image">
          <img src={image7} alt="image7" />
        </div>
        <div className="carousel2-image">
          <img src={image8} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image9} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image10} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image11} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image12} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image13} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image14} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image15} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image16} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image17} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image18} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image19} alt="image1" />
        </div>
        <div className="carousel2-image">
          <img src={image20} alt="image1" />
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
