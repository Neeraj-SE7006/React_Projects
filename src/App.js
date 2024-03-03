import React from "react";
import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RecipeId from "./Components/RecipeId";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./Components/Category";
import Search from "./Components/Search";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:idmeal" element={<RecipeId />} />
          <Route path="/Category/:name" element={<Category />} />
          <Route path="/Search/:searchItem" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
