import React from "react";
import Card from "./Cards.js";
import Sdata from "../Sdata.js";
import "./App.css";
// console.log(Sdata[0].sname);
// function ncard(carddata) {// // console.log(carddata.sname);// // console.log(carddata.Sdata);
// return (// <Card// imgscr={carddata.imgscr}// sname={carddata.sname}// title={carddata.title}// />// );// }
const App = () => {
  return (
    <>
      {" "}
      <h1 className="heading_style"> List of top 5 Netflix Series in 2020 </h1>
      {Sdata.map((netdata) => {
        return (
          <Card
            key={netdata.id}
            imgscr={netdata.imgscr}
            sname={netdata.sname}
            title={netdata.title}
            links={netdata.links}
          />
        );
      })}{" "}
    </>
  );
};
export default App;
