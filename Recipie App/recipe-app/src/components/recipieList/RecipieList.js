import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaHeart, FaSearch } from "react-icons/fa";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("chicken");
  const [searchQuery, setSearchQuery] = useState(query);
  const [favorites, setFavorites] = useState([]);
  const [validRecipes, setValidRecipes] = useState([]);

  const validateImage = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  const fetchRecipes = useCallback(async (searchTerm) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
            query: searchTerm,
            addRecipeInformation: true,
            number: 12
          }
        }
      );
      
      setRecipes(response.data.results);
      
      // Validate all images and filter out recipes with invalid images
      const validatedRecipes = await Promise.all(
        response.data.results.map(async (recipe) => {
          const isValid = await validateImage(recipe.image);
          return isValid ? recipe : null;
        })
      );
      
      setValidRecipes(validatedRecipes.filter(recipe => recipe !== null));
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecipes(searchQuery);
  }, [searchQuery, fetchRecipes]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  const handleAddFavorite = (recipe, e) => {
    e.preventDefault();
    setFavorites(prev => {
      const isAlreadyFavorite = prev.some(fav => fav.id === recipe.id);
      if (isAlreadyFavorite) {
        return prev.filter(fav => fav.id !== recipe.id);
      }
      return [...prev, recipe];
    });
  };

  return (
    <div className="recipe-container">
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search recipes and press Enter..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            <FaSearch />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
      
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : validRecipes.length === 0 ? (
        <div className="no-results">No recipes found. Try a different search term.</div>
      ) : (
        <div className="recipe-grid">
          {validRecipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
              <div className="recipe-card-content">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                />
                <div className="recipe-info">
                  <h2>{recipe.title}</h2>
                  <div className="recipe-meta">
                    <p>Ready in {recipe.readyInMinutes} mins</p>
                    <p>{recipe.servings} servings</p>
                  </div>
                </div>
                <button
                  className={`favorite-btn ${favorites.some(fav => fav.id === recipe.id) ? 'active' : ''}`}
                  onClick={(e) => handleAddFavorite(recipe, e)}
                >
                  <FaHeart />
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;