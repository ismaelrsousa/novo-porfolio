import React from 'react';

import './index.css';

import Menu from '../../components/Menu';
import Principal from '../../components/Principal';
import Projetos from '../../components/Projetos';

export default function Home() {
  return ( 
      <main className="home-page">
        <Menu></Menu>
        <Principal></Principal>
        <Projetos></Projetos>
      </main>
  );
}