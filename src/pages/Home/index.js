import React, { useState } from 'react';

import './index.css';

import Menu from '../../components/Menu';
import Principal from '../../components/Principal';
import Projetos from '../../components/Projetos';

export default function Home() {
  let can_scroll = true;
  let speed = 500;
  let active_section = 0;

  return ( 
      <main className="home-page" onWheel={on_wheel}>
        <Menu></Menu>
        <Principal active></Principal>
        <Projetos></Projetos>
      </main>
  );

  function on_wheel(evt) {
    let sections = [...document.getElementsByTagName("section")];

    if(can_scroll) {
      let direction = evt.deltaY
      can_scroll = false;
  
      //  UP
      if(direction < 0 && active_section > 0) change_section(sections);

      //  DOWN
      if(direction > 0 && active_section < sections.length - 1) change_section(sections, true);

      setTimeout(() => { can_scroll = true }, speed);
    }
  }

  function change_section(sections, down = false) {
    if(down) {
      if(active_section < sections.length - 1)
        active_section++;
    }
    else {
      if(active_section > 0)
        active_section--;
    }

    go_to_section(sections);
  }

  function go_to_section(sections, index = -1) {
    let main = document.getElementsByTagName("main")[0];
    
    sections.map((section) => { section.classList.remove("active"); });

    console.log(active_section);

    if(index != -1) {
      main.scrollTop = sections[index].offsetTop;
      sections[index].classList.add("active")
    } else {
      main.scrollTop = sections[active_section].offsetTop;
      sections[active_section].classList.add("active")
    }
    


    // let position = sections[active_section].offsetTop
    // if (sections[active_section].dataset.offset) position -= sections[active_section].dataset.offset
  }
}