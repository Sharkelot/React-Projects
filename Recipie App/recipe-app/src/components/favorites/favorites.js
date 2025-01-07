import React, { useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]);
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>
              {favorite.title} <button>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;