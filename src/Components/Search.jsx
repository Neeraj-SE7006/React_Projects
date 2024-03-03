import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Search = () => {
  const { searchItem } = useParams();
  const [data, setdata] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`
        );
        const api_data = await api.json();

        if (api_data.meals) {
          setdata(api_data.meals);
          setError(null); // Reset error if data is found
        } else {
          setdata([]);
          setError(`No results found for "${searchItem}"`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };
    fetchdata();
  }, [searchItem]);

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
        {error ? (
          <div style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
            {error}
          </div>
        ) : (
          data.map((d) => (
            <div style={{ textAlign: "center" }} key={d.idMeal}>
              <Link to={`/${d.idMeal}`}>
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
          ))
        )}
      </div>
      <TrendingSlider />
    </>
  );
};

export default Search;
