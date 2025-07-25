import React, { useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets.js"; // uploads the assets objects from the export const in the js file, since it assums assets is a js file, no need of .js tbh
import { useState } from "react";
import { Context } from "../../context/Context.jsx";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, startNewChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />

        <div onClick={()=> startNewChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className={`recent-title ${extended ? 'visible' : 'hidden'}`}>Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.length > 15 ? item.slice(0, 15) + "..." : item}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-items recent-entry">
          <img src={assets.question_icon} alt="" />
          <p className={`menu-text ${extended ? 'visible' : 'hidden'}`}>Help</p>
        </div>

        <div className="bottom-items recent-entry">
          <img src={assets.history_icon} alt="" />
          <p className={`menu-text ${extended ? 'visible' : 'hidden'}`}>Activity</p>
        </div>

        <div className="bottom-items recent-entry">
          <img src={assets.setting_icon} alt="" />
          <p className={`menu-text ${extended ? 'visible' : 'hidden'}`}>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
