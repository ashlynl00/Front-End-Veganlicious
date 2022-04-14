import { useState } from "react"
import axios from 'axios';
import apiUrl from "../apiConfig";

const NewRecipeComponent = (props) => {
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        link: '',
        image: ''
    })
    const handleInputChange = (e) => {
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value
        })
        console.log(newRecipe);
    }
    const handleImageChange = (e) => {
        setNewRecipe({
            ...newRecipe,
            image: e.target.files[0]
        })
        console.log(newRecipe);
    }
    const submitNewRecipe = async (e) => {
        e.preventDefault();
        if (newRecipe.name.length > 2) {
            let form_data = new FormData();
            form_data.append('image', newRecipe.image);
            form_data.append('name', newRecipe.name);
            form_data.append('link', newRecipe.link);
            let url = `${apiUrl}/api/recipes`;
            axios.post(url, form_data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            })
                .then(res => {
                console.log(res.data);
                props.setRecipes([
                    ...props.recipes,
                    res.data
                ])
                })
                .catch(err => console.log(err))

                
        } else {
            console.log('in else')
            alert('The name of the recipe has to be at least 2 characters long.');
        }

        // if (newRecipe.name.length > 2) {
        //     console.log('yes it is greater than 2 letters');
        //     const apiResponse = await fetch('https://veganlicious.herokuapp.com/api/recipes', {
        //        method: "POST",
        //        body: JSON.stringify(newRecipe),
        //        headers: {
        //            'Content-Type': "application/json"
        //        } 
        //     })
        //     const parsedResponse = await apiResponse.json();
        //     console.log(parsedResponse);

        //     props.setRecipes([
        //         ...props.recipes,
        //         parsedResponse
        //     ])
        //     console.log(props.recipes);
        // } else {
        //     console.log('in else')
        //     alert('The name of the recipe has to be at least 2 characters long.');
        // }
        setNewRecipe({
            name: '',
            link: '',
            image: ''
        });
    }

    return (
        <div id='new-recipe-form'>
            <h2>Add a new recipe: </h2>
            <form onSubmit={submitNewRecipe} encType="multipart/form">
                Recipe Name: <input type="text" placeholder="Recipe Name" name="name" onChange={handleInputChange} value={newRecipe.name}></input>
                Link to Recipe if Exists: <input type="text" placeholder="Link" name="link" onChange={handleInputChange} value={newRecipe.link}></input>
                Upload Image: <input type="file" id="image" accept="image/png, image/jpeg" name="image" onChange={handleImageChange} required/>
                <button type='submit'>Submit</button>
            </form>
            <button onClick={props.toggleShowing}>Cancel</button>
        </div>
    )
}

export default NewRecipeComponent;