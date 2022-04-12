import { useEffect, useState } from "react"
import SingleRecipeComponent from "./SingleRecipeComponent/SingleRecipeComponent";

const RecipesContainer = (props) => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing);
    };
    // get the recipes so we can show them below through map
    // start with fake data
    const getRecipes = async () => {
        const getRecipesApiResponse = await fetch ('https://veganlicious.herokuapp.com/api/recipes');
        const parsedResponse = await getRecipesApiResponse.json();
        console.log(parsedResponse);
        console.log(parsedResponse[0].name);
        props.setRecipes(parsedResponse)
        toggleShowing();
    }
    //useEffect(getRecipes, []);
    return (
        <>
            { showing ?
                <ul>
                    {props.recipes.map((recipe)=>{
                        return (
                            <li key={recipe.id}><SingleRecipeComponent recipe={recipe} recipes={props.recipes} setRecipes={props.setRecipes}></SingleRecipeComponent></li>
                        )
                    })}
                </ul>
                :
                <button onClick={getRecipes}>get recipes</button>
            }
        </>
    )
}

export default RecipesContainer;