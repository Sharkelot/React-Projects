import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import RecipeList from "./components/recipieList/RecipieList";
import RecipeDetail from "./components/recipieDetails/RecipieDetails";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;