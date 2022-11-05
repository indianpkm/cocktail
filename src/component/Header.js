import React from 'react';
import { FaCocktail } from 'react-icons/fa'

const Header = () => {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h4> <a className="navbar-brand" href='https://www.thecocktaildb.com/api.php'><FaCocktail color='yellow' />&nbsp; Cocktail Website</a> </h4>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item active mt-2 me-5">
              <h5><a className="nav-link" target="_blank" href="https://www.thecocktaildb.com/api.php" rel="noreferrer">Api Source</a></h5>
            </li>
            <li className="nav-item mt-2 ">
              <h5><a className="nav-link" target="_blank" href="https://www.linkedin.com/in/pramod-kumar-maurya-35260b1a6" rel="noreferrer">Developer Contact</a></h5>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </>)
}

export default Header