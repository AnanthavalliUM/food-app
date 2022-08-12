import React, {useState} from "react";
import RecipeDetails from "./recipedetails";

const Recipe = ({recipe}) => {
  const [show, setshow] = useState(false)
    const{label, image, url, ingredients } = recipe.recipe 
    return (
    <div className="recipe">
        <h2>{label}</h2>
        <img src={image} alt={label} />
        <a href={url} target="_blank" rel="noopener noreferrer">
         URL
        </a>
        <button onClick={() => setshow(!show) }>Ingredients</button>
        { show && <RecipeDetails ingredients={ingredients} /> }
        



    </div>
    )
};

 
export default Recipe