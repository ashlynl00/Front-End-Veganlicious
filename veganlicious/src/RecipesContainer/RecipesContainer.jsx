import { useState } from "react"
import SingleRecipeComponent from "./SingleRecipeComponent/SingleRecipeComponent";

const RecipesContainer = () => {
    // get the recipes so we can show them below through map
    // start with fake data
    const [recipes, setRecipes] = useState([{name: 'nachos', link: 'https://minimalistbaker.com/the-best-damn-vegan-nachos/'}, {name: 'nachos', link: 'https://minimalistbaker.com/the-best-damn-vegan-nachos/'}]);
    return (
        <ul>
            {recipes.map((recipe)=>{
                return (
                    <li><SingleRecipeComponent recipe={recipe}></SingleRecipeComponent></li>
                )
            })}
        </ul>
    )
}

export default RecipesContainer;