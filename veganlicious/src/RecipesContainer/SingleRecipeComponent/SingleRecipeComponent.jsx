import UpdateRecipeComponent from "./UpdateRecipeComponent";
import DeleteRecipeComponent from "./DeleteRecipeComponent";
import { useState } from "react";

const SingleRecipeComponent = (props) => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing);
    }
    return (
        <div className="single-recipe">  
            <h2>{props.recipe.name}</h2>
            <img src={props.recipe.image} id="recipe-img"></img>
            {showing ?
                <div className="overlay">
                    <UpdateRecipeComponent className='recipe-btn' recipe={props.recipe} recipes={props.recipes} setRecipes={props.setRecipes} toggleShowing={toggleShowing}></UpdateRecipeComponent>
                </div>
                :
                <button onClick={toggleShowing} className='recipe-btn'>Edit Recipe</button>
            }
            <DeleteRecipeComponent recipe={props.recipe} recipes={props.recipes} setRecipes={props.setRecipes}></DeleteRecipeComponent>
        </div>
    )
}

export default SingleRecipeComponent;