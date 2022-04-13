import UpdateRecipeComponent from "./UpdateRecipeComponent";
import DeleteRecipeComponent from "./DeleteRecipeComponent";

const SingleRecipeComponent = (props) => {
    return (
        <>  
            <h2>{props.recipe.name}</h2>
            <img src={props.recipe.image}></img>
            <p>{props.recipe.link}</p>
            <UpdateRecipeComponent recipe={props.recipe} recipes={props.recipes} setRecipes={props.setRecipes}></UpdateRecipeComponent>
            <DeleteRecipeComponent recipe={props.recipe} recipes={props.recipes} setRecipes={props.setRecipes}></DeleteRecipeComponent>
        </>
    )
}

export default SingleRecipeComponent;