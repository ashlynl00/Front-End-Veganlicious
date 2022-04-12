import { useState } from "react"
import SingleRecipeComponent from "./SingleRecipeComponent/SingleRecipeComponent";

const RecipesContainer = (props) => {
    // get the recipes so we can show them below through map
    // start with fake data
    return (
        <ul>
            {props.recipes.map((recipe)=>{
                return (
                    <li><SingleRecipeComponent recipe={recipe}></SingleRecipeComponent></li>
                )
            })}
        </ul>
    )
}

export default RecipesContainer;