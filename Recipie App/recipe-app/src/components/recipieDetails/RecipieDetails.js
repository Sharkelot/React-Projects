import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
        );
        setRecipe(response.data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch recipe details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="recipe-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">
        <FaArrowLeft /> Back to Recipes
      </button>
      <article className="recipe-detail">
        <header className="recipe-header">
          <h2>{recipe.title}</h2>
          <div className="recipe-meta-info">
            <span>Ready in {recipe.readyInMinutes} minutes</span>
            <span>•</span>
            <span>{recipe.servings} servings</span>
            <span>•</span>
            <span>Health Score: {recipe.healthScore}</span>
          </div>
        </header>
        
        <div className="recipe-image-container">
          <img src={recipe.image} alt={recipe.title} />
        </div>

        <div className="recipe-content">
          <section className="ingredients-section">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </section>

          <section className="instructions-section">
            <h3>Instructions</h3>
            <div 
              className="instructions-content"
              dangerouslySetInnerHTML={{ __html: recipe.instructions }} 
            />
          </section>
        </div>
      </article>
    </div>
  );
};

export default RecipeDetail;