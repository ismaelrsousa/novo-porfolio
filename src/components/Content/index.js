import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";

import LaptopImg from "../../images/decoration/laptop.svg";
import PhoneImg from "../../images/decoration/phone.svg";

class Content extends Component {
  state = {};

  render() {
    return (
      <section className="content container">
        <div className="left">
          <div className="hi">olá,</div>
          <h2 className="title">
            eu sou <span className="colored">ismael sousa</span>
            <br /> desenvolvedor front end
          </h2>

          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat pariatur consequuntur eius sit assumenda et voluptates exercitationem minus, rerum sint illo veniam maxime autem culpa
              quae nisi mollitia ipsa voluptate!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat pariatur consequuntur eius sit assumenda et voluptates exercitationem minus, rerum sint illo veniam maxime autem culpa
              quae nisi mollitia ipsa voluptate!
            </p>
          </div>
        </div>

        <div className="right">
          <img src={ LaptopImg } alt="" className="laptop" />
          <img src={ PhoneImg } alt="" className="phone" />
        </div>
      </section>
    );
  }
}

export default Content;
