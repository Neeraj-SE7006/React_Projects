import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { useParams } from "react-router-dom";
import "./RecipeId.css";
const RecipeId = () => {
  const { idmeal } = useParams();
  const [data, setdata] = useState([]);
  const [active, setactive] = useState("ingredients");
  useEffect(() => {
    const fetchdata = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`
      );
      const api_data = await api.json();

      setdata(api_data.meals[0]);
      console.log(api_data);
    };
    fetchdata();
  }, [idmeal]);

  return (
    <>
      <Navbar />
      <div style={{ width: "90%", margin: "auto", textAlign: "center" }}>
        <h1 style={{ paddingTop: "70px", marginRight: "220px" }}>
          {data.strMeal}
        </h1>
        <div className="flex">
          <div className="img">
            <img
              src={data.strMealThumb}
              alt=""
              style={{ width: "250px", margin: "15px", borderRadius: "15px" }}
            />
          </div>

          <div className="content">
            <button className="btn" onClick={() => setactive("ingredients")}>
              Ingredients
            </button>
            <button className="btn" onClick={() => setactive("instruction")}>
              Instruction
            </button>
            {active === "ingredients" ? (
              <div>
                <h2
                  className="h2data
                    "
                >
                  {" "}
                  {data.strIngredient1} - {data.strMeasure1}{" "}
                </h2>
                <h2
                  className="h2data
                    "
                >
                  {" "}
                  {data.strIngredient2} - {data.strMeasure2}{" "}
                </h2>
                <h2
                  className="h2data
                    "
                >
                  {" "}
                  {data.strIngredient3} - {data.strMeasure3}{" "}
                </h2>
                <h2
                  className="h2data
                    "
                >
                  {" "}
                  {data.strIngredient4} - {data.strMeasure4}{" "}
                </h2>
                <h2
                  className="h2data
                    "
                >
                  {" "}
                  {data.strIngredient5} - {data.strMeasure5}{" "}
                </h2>
                <h2
                  className="h2data
                    "
                >
                  {" "}
                  {data.strIngredient6} - {data.strMeasure6}{" "}
                </h2>
              </div>
            ) : (
              <p style={{ textAlign: "justify" }}>{data.strInstructions}</p>
            )}
          </div>
        </div>
      </div>
      <TrendingSlider />
    </>
  );
};

export default RecipeId;
