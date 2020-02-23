import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Oppo() {
  return (
    <div className="oppo">
      <div>&lt; Back</div>
      <Carousel interval={null}>
        <Carousel.Item>
          <div className="questions">What is your favorite color?</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="questions">How are you feeling today?</div>
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

export default Oppo;
