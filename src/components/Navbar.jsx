import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import filmaxLogo from '../images/filmaxLogo.png';
import pipoca from '../images/pipoca.png';
import './Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch("");
  }
  return (
    <nav id="navbar">
      <div><img src={pipoca} alt="pipoca-dudle"/></div>
      <h2>
        <Link to="/">
        <img src={filmaxLogo} alt="filmax-logo"/>
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Search a movie"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
        <button type="submit"><BiSearchAlt2/></button>
      </form>
    </nav>
  )
}

export default Navbar;

