import React, { useState } from "react";

const FilterOptions = () => {
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");

  const handleCuisineChange = (e) => {
    setCuisine(e.target.value);
  };

  const handleDietChange = (e) => {
    setDiet(e.target.value);
  };

  return (
    <div>
      <h2>Filter Options</h2>
      <label>
        Cuisine:
        <select value={cuisine} onChange={handleCuisineChange}>
          <option value="">Any</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
          <option value="indian">Indian</option>
        </select>
      </label>
      <label>
        Diet:
        <select value={diet} onChange={handleDietChange}>
          <option value="">Any</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten free">Gluten Free</option>
        </select>
      </label>
    </div>
  );
};

export default FilterOptions;