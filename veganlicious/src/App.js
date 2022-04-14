import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import RecipesContainer from './RecipesContainer/RecipesContainer';
import NewRecipeComponent from './RecipesContainer/NewRecipeComponent';
import search_logo from './magnifying-glass.png';
import vegan_logo from './VEGANLICIOUS-removebg-preview.png'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing(!showing);
  }
  return (
    <div className="App">
      <nav>
        <section id='search-bar'>
          <img src={search_logo} id='search-logo'></img>
          <p>Search</p>
        </section>
        <hr></hr>
        <section id='nav-bar'>
          <ul>
            <li>About</li>
            <li>How to Use</li>
            <li><img src={vegan_logo} id='logo'></img></li>
            <li>Contact</li>
            <li>New Recipe</li>
          </ul>
        </section>
        <hr></hr>
      </nav>
      <main>
        <h1>RECIPES</h1>
        {showing ? 
          <div className='overlay'>
            <NewRecipeComponent id='new-recipe-modal' recipes={recipes} setRecipes={setRecipes} toggleShowing={toggleShowing}></NewRecipeComponent>
          </div>
          :
          <button id='new-recipe-btn' onClick={toggleShowing}>Add Recipe</button>
        } 
        <RecipesContainer recipes={recipes} setRecipes={setRecipes}></RecipesContainer>
      </main>
    </div>
  );
}

export default App;
