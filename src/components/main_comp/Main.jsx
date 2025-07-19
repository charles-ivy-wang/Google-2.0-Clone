import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import DOMPurify from "dompurify";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
    randomCards
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResults ? (
          <>
            <div className="intro">
              <p>
                <span>Hello, Charles</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards-group">
              <div className="card" onClick={() => onSent(randomCards[0])}>
                <p>{randomCards[0]}</p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div className="card" onClick={() => onSent(randomCards[1])}>
                <p>{randomCards[1]}</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div className="card" onClick={() => onSent(randomCards[2])}>
                <p>{randomCards[2]}</p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div className="card" onClick={() => onSent(randomCards[3])}>
                <p>{randomCards[3]}</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="resultTitle">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>

            <div className="resultData">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                /* the loading animation*/
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                /* dompurify sanitizes before we hide the tags*/
                <p
                  dangerouslySetInnerHTML={{
                    __html: resultData,
                  }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Ask Gemini"
              onKeyDown={(e) => {
                if (e.key === "Enter" && input.trim() !== "") {
                  // return key work as well, however, only when there is text
                  onSent();
                }
              }}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="disclaimer">
            Gemini may display inaccurate information
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
