import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import RecipesContainer from './RecipesContainer/RecipesContainer';
import NewRecipeComponent from './RecipesContainer/NewRecipeComponent';
import About from './NavComponent/About';
import Contact from './NavComponent/Contact';
import HowToUse from './NavComponent/HowToUse';
import NavComponent from './NavComponent/NavComponent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent></NavComponent>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/how-to-use" element={<HowToUse />}></Route>
        </Routes>
      </div>
    </Router>
    // <div className="App">
    //   <nav>
    //     <section id='search-bar'>
    //       <img src={search_logo} id='search-logo'></img>
    //       <p>Search</p>
    //     </section>
    //     <hr></hr>
    //     <section id='nav-bar'>
    //       <ul>
    //         <li>About</li>
    //         <li>How to Use</li>
    //         <li><img src={vegan_logo} id='logo'></img></li>
    //         <li>Contact</li>
    //         <li>New Recipe</li>
    //       </ul>
    //     </section>
    //     <hr></hr>
    //   </nav>
    //   <main>
    //     <h1>RECIPES</h1>
    //     {showing ? 
    //       <div className='overlay'>
    //         <NewRecipeComponent id='new-recipe-modal' recipes={recipes} setRecipes={setRecipes} toggleShowing={toggleShowing}></NewRecipeComponent>
    //       </div>
    //       :
    //       <button id='new-recipe-btn' onClick={toggleShowing}>Add Recipe</button>
    //     } 
    //     <RecipesContainer recipes={recipes} setRecipes={setRecipes}></RecipesContainer>
    //   </main>
    // </div>
  );
}

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing(!showing);
  }
  return (
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
  )
}

export default App;
