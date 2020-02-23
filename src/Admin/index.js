import React, { useState } from "react";
import Oppo from "../Oppo";

function Admin(props) {
  const [goToOppo, setGoToOppo] = useState(false);

  if (goToOppo) return <Oppo />;
  return (
    <div>
      <h1>Welcome, {props.user}</h1>

      <p onClick={() => setGoToOppo(true)}>Take me to Oppo!</p>
    </div>
  );
}

export default Admin;
