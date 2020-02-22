import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./assets/styles/index.css";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <div>
      <Carousel interval={null}>
        <Carousel.Item>
          <div className="questions">Pick your favorite color?</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="questions">how are you feeling today?</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="questions">Do you feel safe today?</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="questions">Do you feel safe to talk here?</div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
