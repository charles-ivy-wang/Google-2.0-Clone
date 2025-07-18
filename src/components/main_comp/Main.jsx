import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="intro">
          <p><span>Hello, Charles</span></p>
          <p>How can I help you today?</p>
        </div>

        <div className="cards-group">
          <div className="card">
            <p>Provide an overview of Neural Networks</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Suggest budget-friendly restaurants in New York City</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Brainstorm family activities for the weekend</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Teach me different libraries of Javascript</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
