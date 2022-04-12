import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import RecipesContainer from './RecipesContainer/RecipesContainer';
import NewRecipeComponent from './RecipesContainer/NewRecipeComponent';

function App() {
  const [recipes, setRecipes] = useState([{name: 'nachos', link: 'https://minimalistbaker.com/the-best-damn-vegan-nachos/'}, {name: 'nachos', link: 'https://minimalistbaker.com/the-best-damn-vegan-nachos/'}]);
  return (
    <div className="App">
      <h1>Recipes Yay</h1>
      <NewRecipeComponent recipes={recipes} setRecipes={setRecipes}></NewRecipeComponent>
      <RecipesContainer recipes={recipes} setRecipes={setRecipes}></RecipesContainer>
    </div>
  );
}

export default App;
