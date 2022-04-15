import search_logo from '../magnifying-glass.png';
import vegan_logo from '../VEGANLICIOUS-removebg-preview.png';
import {Link, useNavigate} from 'react-router-dom';

const NavComponent = (props) => {
    return (
        <nav>
         <section id='search-bar'>
           <img src={search_logo} id='search-logo'></img>
           <p>Search</p>
         </section>
         <hr></hr>
         <section id='nav-bar'>
           <ul>
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/how-to-use'>
                <li>How to Use</li>
            </Link>
            <Link to='/'>
             <li><img src={vegan_logo} id='logo'></img></li>
            </Link>
            <Link to='/contact'>
                <li>Contact</li>
            </Link>
            <li onClick={props.toggleShowing} id='new-recipe-nav'>New Recipe</li>
           </ul>
         </section>
         <hr></hr>
       </nav>
    )
}

export default NavComponent;