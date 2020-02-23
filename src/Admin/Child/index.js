import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/rainbow.png";

function Child(props) {
  /*
Child: {
    character,
    first name,
    last name,
    dob,
    visits: [ {...}, {...}, {...}]
}
*/
  const child = global.getChild(props.match.params.id);
  return (
    <>
      <div className="admin container header oppo">
        <Link className="nolink" to="/">
          <img className="logo" src={logo} />
          <h1>Oppo</h1>
          <img className="logo" src={logo} />
        </Link>
      </div>
      <div className="admin card container">
        <div className="row">
          <div className="col">
            <h1>
              {child.firstName} {child.lastName}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">{child.dob}</div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Visits</h2>
          </div>
        </div>
        <div className="row">
          {child.visits.map(visit => (
            <>
              <div className="col-lg-4">
                <div>
                  <h4>Visit #{visit.id + 1}</h4>
                </div>
                <ul>
                  <li>{visit.datetime}</li>
                  {visit.notes ? <li>{visit.notes}</li> : <li>N/A</li>}
                </ul>
                <p>
                  <strong> What is your favorite color?</strong>
                </p>
                <p>{visit.evaluation.answer1}</p>
                <p>
                  <strong> How are you feeling today?</strong>
                </p>
                <p>{visit.evaluation.answer2}</p>
                <p>
                  <strong> Do you feel safe today?</strong>
                </p>
                {visit.evaluation.answer3}
                <p>
                  <strong> Do you feel safe to talk here?</strong>
                </p>
                {visit.evaluation.answer4}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Child;
