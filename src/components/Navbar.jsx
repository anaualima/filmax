import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import { LuPopcorn } from "react-icons/lu";

import filmaxLogo from '../images/filmaxLogo.png';
import Tippy from '@tippyjs/react';

import './Navbar.css';
import 'tippy.js/dist/tippy.css'

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return
    navigate(`/search?q=${search}`)
    setSearch("");
  }
  return (
    <nav id="navbar">
      <div>
        <Tippy content="Concessions">
          <Link to="concessions"><LuPopcorn /></Link>
        </Tippy>
      </div>
      <h2>
        <Link to="/">
          <img src={filmaxLogo} alt="filmax-logo" />
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a movie"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit"><BiSearchAlt2 /></button>
      </form>
    </nav>
  )
}

export default Navbar;

