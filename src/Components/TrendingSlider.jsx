import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrendingSlider.css";
import { Link } from "react-router-dom";
const TrendingSlider = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );
      const api_data = await api.json();
      console.log(api_data.meals);
      setdata(api_data.meals);
    };
    fetchdata();
  }, []);
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <>
      <div
        style={{
          height: "18vh",
          width: "99%",
          margin: "auto",
          // backgroundColor: 'yellow'
        }}
      >
        <Slider
          {...settings}
          style={{ margin: "30px", height: "30vh", marginLeft: "50px" }}
        >
          {data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`} key={d.idMeal}>
                <div className="slider2">
                  <img
                    src={d.strMealThumb}
                    alt=""
                    style={{ width: "120px", height: "12vh" }}
                  />
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default TrendingSlider;
