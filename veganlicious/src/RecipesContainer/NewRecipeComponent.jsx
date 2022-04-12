import { useState } from "react"

const NewRecipeComponent = (props) => {
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        link: ''
    })
    const handleInputChange = (e) => {
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value
        })
        console.log(newRecipe);
    }
    const submitNewRecipe = async (e) => {
        e.preventDefault();
        if (newRecipe.name.length > 2) {
            console.log('yes it is greater than 2 letters');
            const apiResponse = await fetch('https://veganlicious.herokuapp.com/api/recipes', {
               method: "POST",
               body: JSON.stringify(newRecipe),
               headers: {
                   'Content-Type': "application/json"
               } 
            })
            const parsedResponse = await apiResponse.json();
            console.log(parsedResponse);

            props.setRecipes([
                ...props.recipes,
                parsedResponse
            ])
            console.log(props.recipes);
        } else {
            console.log('in else')
            alert('The name of the recipe has to be at least 2 characters long.');
        }
        setNewRecipe({
            name: '',
            link: ''
        });
    }
    return (
        <>
            <h2>Add a new recipe: </h2>
            <form onSubmit={submitNewRecipe}>
                Recipe Name: <input type="text" placeholder="Recipe Name" name="name" onChange={handleInputChange} value={newRecipe.name}></input>
                Link to Recipe if Exists: <input type="text" placeholder="Link" name="link" onChange={handleInputChange} value={newRecipe.link}></input>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default NewRecipeComponent;