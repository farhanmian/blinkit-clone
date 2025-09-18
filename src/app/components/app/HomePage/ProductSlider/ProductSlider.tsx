"use client";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductTypeList } from "../../../../../../store/types/type";
import Slider from "react-slick";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  adaptiveHeight: true,
  //   gap: 20,
  //   nextArrow: (
  //     // <ArrowButton icon={<IconArrowRight size={20} color="#000" />} />
  //     <div className="sliderArrow">
  //       <IconArrowRight size={20} color="#000" />
  //     </div>
  //   ),
  //   prevArrow: (
  //     // <ArrowButton icon={<IconArrowLeft size={20} color="#000" />} />
  //     <div className="sliderArrow">
  //       <IconArrowLeft size={20} color="#000" />
  //     </div>
  //   ),
};

const ProductSlider: React.FC<{
  categoryWiseProducts: { [key: string]: ProductTypeList };
  categoryName: string;
}> = ({ categoryWiseProducts, categoryName }) => {
  return (
    <div>
      <Slider {...settings}>
        {categoryWiseProducts[categoryName].map((product) => {
          return (
            <div className="px-2.5">
              <ProductCard key={product.id} product={product} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
