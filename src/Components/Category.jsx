import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
function Category() {
  const { name } = useParams();
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
      );
      const api_data = await api.json();
      console.log(api_data.meals);
      setdata(api_data.meals);
    };
    fetchdata();
  }, [name]);
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "99%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(15rem,1fr))",
          gridGap: "1rem",
        }}
      >
        {data.map((d) => {
          return (
            <div style={{ textAlign: "center" }}>
              <Link to={`/${d.idMeal}`} key={d.idMeal}>
                <div className="slider">
                  <img
                    src={d.strMealThumb}
                    alt=""
                    style={{ width: "350px", height: "30vh" }}
                  />
                </div>
              </Link>
              <h2>{d.strMeal}</h2>
            </div>
          );
        })}
      </div>
      <TrendingSlider />
    </>
  );
}

export default Category;
