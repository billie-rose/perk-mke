import React, { useState } from "react";
import Oppo from "../Oppo";
import Child from "./Child";

function Admin(props) {
  const [goToOppo, setGoToOppo] = useState(false);

  if (goToOppo) return <Oppo />;
  return (
    <div className="wrapper admin">
      <div className="row">
        <div className="col">
          <h1>Welcome, {props.user}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">Character goes here</div>
        <div className="col">
          <ul>
            <li>Student name</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <Child
          firstName="Jose"
          lastName="Smith"
          character="cat"
          dob="01/01/2010"
          visits={["arbitrary"]}
        />
      </div>
    </div>
  );
}

export default Admin;
