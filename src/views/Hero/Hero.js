import React from "react";

import SliderImages from "../../Components/SliderImages/SliderImages";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";
import Newsletter from "../../Components/Newsletter/Newsletter";

const Hero = () => {
  return (
    <div>
      <SliderImages />
      <ItemListContainer />
      <Newsletter />
    </div>
  );
};

export default Hero;
