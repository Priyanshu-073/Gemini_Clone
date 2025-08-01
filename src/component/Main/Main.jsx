import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" srcset="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today? </p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest Holiday plan for next weekend near me </p>
                <img src={assets.compass_icon} alt="" srcset="" />
              </div>
              <div className="card">
                <p>Suggest Holiday plan for next weekend near me </p>
                <img src={assets.bulb_icon} alt="" srcset="" />
              </div>
              <div className="card">
                <p>Suggest Holiday plan for next weekend near me </p>
                <img src={assets.message_icon} alt="" srcset="" />
              </div>
              <div className="card">
                <p>Suggest Holiday plan for next weekend near me </p>
                <img src={assets.code_icon} alt="" srcset="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" srcset="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
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
              name=""
              id=""
              placeholder="Enter a Prompt"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">Gemini may display inaccurate info</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
