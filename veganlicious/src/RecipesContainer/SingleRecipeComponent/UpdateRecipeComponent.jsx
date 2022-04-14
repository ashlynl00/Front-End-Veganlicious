import { useState } from "react";
import apiUrl from "../../apiConfig";

const UpdateRecipeComponent = (props) => {
    const [updateRecipe, setUpdateRecipe] = useState({
        name: '',
        link: '',
        description: '',
        ingredients: '',
        directions: '',
        tags: ''
    })
    const handleInputChange = (e) => {
        setUpdateRecipe({
            ...updateRecipe,
            [e.target.name]: e.target.value
        })
    }
    const updateContactAPI = async (idToUpdate) => {
        const apiResponse = await fetch(`${apiUrl}/api/recipes/${idToUpdate}`, {
            method: "PUT",
            body: JSON.stringify(updateRecipe),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (apiResponse.status == 200) {
            const parsedResponse = await apiResponse.json();
            let newList = [];
            for (let i=0; i<props.recipes.length; i++) {
                if (props.recipes[i].id == props.recipe.id) {
                    newList.push(parsedResponse);
                } else {
                    newList.push(props.recipes[i])
                }
            }
            props.setRecipes(newList);
            console.log(props.recipes);
        }
    }
    const submitUpdateRecipe = (e) => {
        e.preventDefault();
        if (updateRecipe.name.length > 2) {
            console.log('yes it is greater than 2 letters');
            updateContactAPI(props.recipe.id);
            console.log(props.recipes);
        } else {
            console.log('in else')
            alert('The name of the recipe has to be at least 2 characters long.');
        }
        setUpdateRecipe({
            name: '',
            link: '',
            description: '',
            ingredients: '',
            directions: '',
            tags: ''
        });
    }
    return (
        <div id="edit-recipe-form">
            <h3>Update this recipe: </h3>
            <form onSubmit={submitUpdateRecipe}>
                <label for='name'>Recipe Name: </label>
                <input type="text" name="name" className="name" value={updateRecipe.name} onChange={handleInputChange}></input>
                <label for='link'>Link: </label>
                <input type="text" name="link" className="link" value={updateRecipe.link} onChange={handleInputChange}></input>
                <label for='description'>Description: </label>
                <textarea type="text" name="description" className="description" onChange={handleInputChange} value={updateRecipe.description}></textarea>
                <label for='ingredients'>Ingredients: </label>
                <textarea type="text" name="ingredients" className="ingredients" onChange={handleInputChange} value={updateRecipe.ingredients}></textarea>
                <label for='directions'>Directions: </label>
                <textarea type="text" name="directions" className="directions" onChange={handleInputChange} value={updateRecipe.directions}></textarea>
                <label for='tags'>Tags: </label>
                <input type="text" name="tags" className="tags" onChange={handleInputChange} value={updateRecipe.tags}></input>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
            <button className="cancel-btn" onClick={props.toggleShowing}>Cancel</button>
        </div>
    )
}

export default UpdateRecipeComponent;