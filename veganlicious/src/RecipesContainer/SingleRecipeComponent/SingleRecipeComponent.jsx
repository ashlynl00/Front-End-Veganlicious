import UpdateRecipeComponent from "./UpdateRecipeComponent";
import DeleteRecipeComponent from "./DeleteRecipeComponent";
import { useState } from "react";

const SingleRecipeComponent = (props) => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing);
    }
    return (
        <>  
            <h2>{props.recipe.name}</h2>
            <img src={props.recipe.image}></img>
            <p>{props.recipe.link}</p>
            {showing ?
                <div className="overlay">
                    <UpdateRecipeComponent recipe={props.recipe} recipes={props.recipes} setRecipes={props.setRecipes} toggleShowing={toggleShowing}></UpdateRecipeComponent>
                </div>
                :
                <button onClick={toggleShowing}>Edit Recipe</button>
            }
            
            <DeleteRecipeComponent recipe={props.recipe} recipes={props.recipes} setRecipes={props.setRecipes}></DeleteRecipeComponent>
        </>
    )
}

export default SingleRecipeComponent;