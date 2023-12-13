import React from "react";
import './Header.css'
import Starwarslogo from '../../assets/logo.png';
function Header(){
    return (
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img src={Starwarslogo}></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </div>
</nav>
)
}

export default Header;