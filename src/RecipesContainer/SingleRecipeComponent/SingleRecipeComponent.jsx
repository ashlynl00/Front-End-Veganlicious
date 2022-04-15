import UpdateRecipeComponent from "./UpdateRecipeComponent";
import DeleteRecipeComponent from "./DeleteRecipeComponent";
import { useState } from "react";

const SingleRecipeComponent = (props) => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing);
    }
    const [viewMore, setViewMore] = useState(false);
    const toggleViewMore = () => {
        setViewMore(!viewMore);
    }
    return (
        <div className="single-recipe">  
            <h2>{props.recipe.name}</h2>
            <img src={props.recipe.image} id="recipe-img"></img>
            {viewMore ?
                <div className="overlay">
                    <div id="view-more-modal">
                        <button onClick={toggleViewMore}>X</button>
                        <h2>{props.recipe.name}</h2>
                        <img src={props.recipe.image} id="recipe-img"></img>
                        <a href={props.recipe.link}>View Original Recipe</a>
                        <h4>Description</h4>
                        <p>{props.recipe.description}</p>
                        <h4>Ingredients: </h4>
                        <p>{props.recipe.ingredients}</p>
                        <h4>Directions: </h4>
                        <p>{props.recipe.directions}</p>
                    </div>
                </div>
                :
                <button onClick={toggleViewMore}>View Recipe</button>
            }

            {showing ?
                <div className="overlay">
                    <UpdateRecipeComponent className='recipe-btn' recipe={props.recipe} recipes={props.recipes} setRecipes={props.setRecipes} toggleShowing={toggleShowing}></UpdateRecipeComponent>
                </div>
                :
                <button onClick={toggleShowing} className='recipe-btn'>Edit Recipe</button>
            }
            <DeleteRecipeComponent recipe={props.recipe} recipes={props.recipes} setRecipes={props.setRecipes}></DeleteRecipeComponent>
            <p>Tags: {props.recipe.tags}</p>
        </div>
    )
}

export default SingleRecipeComponent;