import { useState } from "react"
import axios from 'axios';
import apiUrl from "../apiConfig";

const NewRecipeComponent = (props) => {
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        link: '',
        image: '',
        description: '',
        directions: '',
        ingredients: '',
        tags: ''
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
            if(newRecipe.image){
                const data = new FormData()
                data.append('file', newRecipe.image)
                data.append('upload_preset', 'veganlicious')
                console.log(newRecipe.image)
                const imageUpload = await axios.post('https://api.cloudinary.com/v1_1/dcbh0v5ds/image/upload', data)
                console.log(imageUpload.data.url)
                newRecipe.image = await imageUpload.data.url
            }else{
                newRecipe.image = 'https://i.imgur.com/BSnwSzw.png'
            }

            let form_data = new FormData();
            form_data.append('image', newRecipe.image);
            form_data.append('name', newRecipe.name);
            form_data.append('link', newRecipe.link);
            form_data.append('description', newRecipe.description);
            form_data.append('directions', newRecipe.directions);
            form_data.append('ingredients', newRecipe.ingredients);
            form_data.append('tags', newRecipe.tags);
            let url = `${apiUrl}/api/recipes`;
            console.log('here is form data');
            console.log(form_data);
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
            image: '',
            description: '',
            directions: '',
            ingredients: '',
            tags: ''
        });
        props.toggleShowing();
    }

    return (
        <div id='new-recipe-form'>
            <h2>Add a new recipe: </h2>
            <form onSubmit={submitNewRecipe} encType="multipart/form">
                <label for='name'>Recipe Name: </label>
                <input type="text" placeholder="Recipe Name" name="name" className="name" onChange={handleInputChange} value={newRecipe.name}></input>
                <label for='link'>Link to Original Recipe: </label>
                <input type="text" placeholder="Link" name="link" className="link" onChange={handleInputChange} value={newRecipe.link}></input>
                <label for='image'>Upload cover Image: </label>
                <input type="file" id="image" accept="image/png, image/jpeg" name="image" onChange={handleImageChange} required/>
                <label for='description'>Description: </label>
                <textarea type="text" placeholder="Description" name="description" className="description" onChange={handleInputChange} value={newRecipe.description}></textarea>
                <label for='ingredients'>Ingredients: </label>
                <textarea type="text" placeholder="Ingredients" name="ingredients" className="ingredients" onChange={handleInputChange} value={newRecipe.ingredients}></textarea>
                <label for='directions'>Directions: </label>
                <textarea type="text" placeholder="Directions" name="directions" className="directions" onChange={handleInputChange} value={newRecipe.directions}></textarea>
                <label for='tags'>Tags: </label>
                <input type="text" placeholder="Tags" name="tags" className="tags" onChange={handleInputChange} value={newRecipe.tags}></input>
                <button type='submit' className="submit-btn">Submit</button>
            </form>
            <button className="cancel-btn" onClick={props.toggleShowing}>Cancel</button>
        </div>
    )
}

export default NewRecipeComponent;