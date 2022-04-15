import apiUrl from "../../apiConfig";

const DeleteRecipeComponent = (props) => {
    const deleteRecipe = async (idToDelete) => {
        try {
            const deleteResponse = await fetch(`${apiUrl}/api/recipes/${idToDelete}`, {
            method: "DELETE"
            });
            if (deleteResponse.status == 204) {
                let newList = [];
                for (let i=0; i<props.recipes.length; i++) {
                    if (props.recipes[i].id !== props.recipe.id) {
                        newList.push(props.recipes[i]);
                    }
                }
                props.setRecipes(newList);
            } else {
                console.log(deleteResponse.status);
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <button onClick={()=>{deleteRecipe(props.recipe.id)}} className='recipe-btn'>Delete this recipe</button>
        </>
    )
}

export default DeleteRecipeComponent;