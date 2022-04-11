const SingleRecipeComponent = (props) => {
    return (
        <>  
            <h2>{props.recipe.name}</h2>
            <p>{props.recipe.link}</p>
        </>
    )
}

export default SingleRecipeComponent;