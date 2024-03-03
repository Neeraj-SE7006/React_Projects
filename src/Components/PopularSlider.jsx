import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PopularSlider.css";
import { Link } from "react-router-dom";
const PopularSlider = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const api_data = await api.json();
      console.log(api_data.meals);
      setdata(api_data.meals);
    };
    fetchdata();
  }, []);
  var settings = {
    //dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <div
        style={{
          height: "45vh",
          width: "90%",
          margin: "auto",
          // backgroundColor: 'yellow'
        }}
      >
        <Slider
          {...settings}
          style={{ margin: "15px", height: "40vh", marginLeft: "100px" }}
        >
          {data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`} key={d.idMeal}>
                <div className="slider">
                  <img
                    src={d.strMealThumb}
                    alt=""
                    style={{ width: "350px", height: "30vh" }}
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

export default PopularSlider;
