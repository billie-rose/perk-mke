import React, { useState } from "react";
import { Link } from "react-router-dom";
import Oppo from "../Oppo";
import Child from "./Child";

function Admin(props) {
  const [goToOppo, setGoToOppo] = useState(false);

  if (goToOppo) return <Oppo />;
  return (
    <div className="admin">
      <div className="row">
        <div className="col">
          <h1>Welcome, {props.user}</h1>
        </div>
      </div>
      {global.getChildren().map(child => {
        return (
          <>
            <div className="row child-container">
              <div className="offset-3 col-3 character-container">
                <img
                  alt="Persona"
                  className={`character ${child.character}`}
                  src={global.getCharacter(child.character)}
                />
              </div>
              <div className="col-6">
                <ul>
                  <Link className="child" to={`/child/${child.id}`}>
                    <li>{`${child.firstName} ${child.lastName}`}</li>
                  </Link>
                </ul>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Admin;
