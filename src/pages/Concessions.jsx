import { useState, useEffect } from 'react';
import lojasamericanas from '../images/lojasamericanas.png';
import fini from '../images/fini.png';
import cacaushow from '../images/cacaushow.png';
import lebiscuit from '../images/lebiscuit.png';

import { Link } from 'react-router-dom';
import './Concessions.css';

const Concessions = () => {
  return (
    <div className="container-concessions">
      <h1>Concessions:</h1>
      <div className="container-logos">
        <a href="https://www.americanas.com.br/">
          <img src={lojasamericanas} alt="lojasamericanas" />
        </a>
        <a href="https://www.finistore.com.br/">
          <img src={fini} alt="finistore" />
        </a>
        <a href="https://www.cacaushow.com.br/">
          <img src={cacaushow} alt="cacaushow" />
        </a>
        <a href="https://www.lebiscuit.com.br/">
          <img src={lebiscuit} alt="lebiscuit" />
        </a>
      </div>
    </div>
  )
}

export default Concessions;