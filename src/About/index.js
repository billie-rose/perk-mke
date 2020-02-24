import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/rainbow.png";

class About extends Component {
  render() {
    return (
      <>
        <div className="admin container header oppo">
          <Link className="nolink" to="/">
            <img className="logo" src={logo} />
            <h1>Oppo</h1>
            <img className="logo" src={logo} />
          </Link>
        </div>
        <div className="admin container ">
          <Link to="/">&lt; Back</Link>
        </div>
        <div className="admin card container">
          <h1 style={{ paddingTop: "10px", fontSize: "2em" }}>About</h1>
          <p>Created for the 2020 MKE Hack-a-Pipeline all womxn hackathon.</p>
          <h2 style={{ fontSize: "1.25em" }}>Contributors</h2>
          <p>
            Candace McKenzie <br /> Sierra Thomas <br /> Moon Skillin <br />
            Billie Rose
          </p>
          <p>&copy; 2020</p>
          <p>
            Rainbow icon made by&nbsp;
            <a
              href="https://www.flaticon.com/authors/vitaly-gorbachev"
              title="Vitaly Gorbachev"
            >
              Vitaly Gorbachev&nbsp;
            </a>
            from&nbsp;
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </p>
        </div>
      </>
    );
  }
}

export default About;
