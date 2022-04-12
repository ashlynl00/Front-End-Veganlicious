import { useState } from "react"

const UpdateRecipeComponent = (props) => {
    const [updateRecipe, setUpdateRecipe] = useState({
        name: '',
        link: ''
    })
    const handleInputChange = (e) => {
        setUpdateRecipe({
            ...updateRecipe,
            [e.target.name]: e.target.value
        })
    }
    const submitUpdateRecipe = (e) => {
        e.preventDefault();
        if (updateRecipe.name.length > 2) {
            console.log('yes it is greater than 2 letters');
            props.setRecipes([
                ...props.recipes,
                updateRecipe
            ])
            console.log(props.recipes);
        } else {
            console.log('in else')
            alert('The name of the recipe has to be at least 2 characters long.');
        }
        setUpdateRecipe({
            name: '',
            link: ''
        });
    }
    return (
        <>
            <h3>Update this recipe: </h3>
            <form onSubmit={submitUpdateRecipe}>
                Recipe Name: <input type="text" name="name" value={updateRecipe.name} onChange={handleInputChange}></input>
                Link: <input type="text" name="link" value={updateRecipe.link} onChange={handleInputChange}></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UpdateRecipeComponent;