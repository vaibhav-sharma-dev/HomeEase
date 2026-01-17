import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCard from "../../../Components/Image_Card/Image_Card";


const RenderArrow = (props) => {
  const {className, style, onClick} = props;

  return (
    <div 
      className={className}
      style={{...style, display: "block", background: "#B28A5B"}}
      onClick={onClick}
    />
  )
}


export default function TrendsImageSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <RenderArrow />,
    prevArrow: <RenderArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
    ]
  };

  const imagesArr = ["Trending_Cottage.png", "Trending_Mansion.png", "Trending_Cottage_2.png", "Trending_Mansion_2.png", "Trending_Apartment.png"];

  const renderPropertyTrends = imagesArr.map((imgSource) => {
      return (<ImageCard source={imgSource} />)
  })

  return (
      <div className="mx-4">
        <Slider {...settings}>
            {renderPropertyTrends}
        </Slider>
      </div>
  )
}
