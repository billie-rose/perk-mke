import React, { useState } from "react";

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
  return (
    <div className="">
      <div className="row">
        <div className="col">{props.character}</div>
        <div className="col">
          {props.firstName} {props.lastName}
        </div>
      </div>
      <div className="row">
        <div className="col">{props.dob}</div>
      </div>
      <div className="row">
        <div className="col">
          Visits
          <div className="row">
            {props.visits.map(visit => (
              <div className="col">Visit # 1</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Child;
