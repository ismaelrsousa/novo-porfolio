import React from 'react';

import './index.css';

export default function Menu() {
  return (
    <nav className="menu">
      <div className="content container">
        <ul className="list">
            <li className="item"><a href="#">Sobre mim</a></li>
            <li className="item"><a href="#">Projetos</a></li>
            <li className="item"><a href="#">Formação</a></li>
            <li className="item"><a href="#">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}