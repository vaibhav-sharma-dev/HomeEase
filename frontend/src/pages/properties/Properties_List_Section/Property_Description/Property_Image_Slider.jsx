import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const RenderDotsClass = (props) => {
    const {className, style, dotsImages} = props;
    
    return (
        // <ul 
        //     className={className}
        //     style={{...style, display: "flex", justifyContent: "space-between"}}
        // >
            // <li 
            //     className={className}
            //     style={{...style, display: "flex", justifyContent: "space-between"}}
            // >
            <>
                {dotsImages}
            </>
            // </li>
        // </ul>
    )
}

const RenderDotsImages = (props) => {
    const {className, style, onClick} = props;

    return (
        <ul
            className={className}
            style={{...style, width: "100px", height: "auto" }}
        >
            <img 
                src={`/Images/Discover_Villa.png`} 
                style={{...style, margin: "10px"}}
                onClick={onClick} 
            />
        </ul>
    )
}

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

export default function PropertyImageSlider() {

    const settings = {
        customPaging: i => (
            <RenderDotsClass dotsImages={<RenderDotsImages />} />
        ),
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <RenderArrow />,
        prevArrow: <RenderArrow />,
        // variableWidth: true
    };

    return (
        <Slider {...settings}>
            <img
                src="/Images/Discover_Villa.png"
                alt="Property Image"
                className="object-contain border shadow-2xl rounded-xl max-h-[600px]"
            />

            <img
                src="/Images/Discover_Cottage.png"
                alt="Property Image"
                className="object-contain h-auto border shadow-2xl rounded-xl max-h-[600px]"
            />

            <img
                src="/Images/Discover_Villa.png"
                alt="Property Image"
                className="object-contain border shadow-2xl rounded-xl max-h-[600px]"
            />

            <img
                src="/Images/Discover_Cottage.png"
                alt="Property Image"
                className="object-contain border shadow-2xl rounded-xl max-h-[600px]"
            />
        </Slider>
    )
}