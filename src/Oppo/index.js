import React from "react";
import Carousel from "react-bootstrap/Carousel";
import thumbsup from "../assets/thumbsup.png";
import thumbsdown from "../assets/thumbsdown.png";

import neutralcat from "../assets/neutralcat.png";
import happycat from "../assets/happycat.png";
import sadcat from "../assets/sadcat.png";
import scaredcat from "../assets/scaredcat.png";
import angrycat from "../assets/angrycat.png";

function Oppo() {
  const colors = {
    Red: "#FF0000",
    Orange: "#FF8000",
    Yellow: "#FFFF00",
    Green: "#66CC00",
    LightBlue: "lightblue",
    Blue: "#0000FF",
    Indigo: "#4b0082",
    Violet: "#EE82EE",
    Brown: "#654321",
    Grey: "#ccc",
    Black: "#333",
    White: "#fff"
  };

  return (
    <div className="oppo">
      <div>&lt; Back</div>
      <div className="card">
        <Carousel interval={null}>
          <Carousel.Item>
            <div id="question1" className="questions">
              What is your favorite color?
              <div className="emo">
                {Object.keys(colors).map(color => (
                  <div
                    className={`color`}
                    style={{ backgroundColor: colors[color] }}
                  >
                    &nbsp;
                  </div>
                ))}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div id="question2" className="questions">
              How are you feeling today?
              <div className="emo">
                <img
                  src={angrycat}
                  className={`character cat emotions angry`}
                />
                <img src={happycat} className="character cat emotions" />
                <img src={neutralcat} className="character cat emotions" />
                <img src={sadcat} className="character cat emotions" />
                <img src={scaredcat} className="character cat emotions" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div id="question3" className="questions">
              Do you feel safe today?
              <div>
                <img className="thumbs" src={thumbsup} />
                <img className="thumbs" src={thumbsdown} />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div id="question4" className="questions">
              Do you feel safe to talk here?
              <div>
                <img className="thumbs" src={thumbsup} />
                <img className="thumbs" src={thumbsdown} />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Oppo;
