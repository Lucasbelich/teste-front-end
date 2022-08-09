import React from "react";

import { useResize } from "./../../hooks/useResize";
import Desktop from "../../assets/Slider/SliderImage.svg";
import Phone from "../../assets/Slider/SliderImagePhone.svg";

import "./SliderImages.styles.css";

const SliderImages = () => {
  const { isPhone } = useResize();
  return (
    <div>
      {!isPhone ? (
        <img className="slider" src={Desktop} alt="slider" />
      ) : (
        <img className="slider" src={Phone} alt="slider" />
      )}
    </div>
  );
};

export default SliderImages;
