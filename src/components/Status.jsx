import React, { useState, useEffect } from "react";
import "../css/status.css";
import { useHistory } from "react-router-dom";
import drone from "../assets/graphics/drone.svg";

export default function Status() {
  const [status, setStatus] = useState([]);
  const history = useHistory();
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  const onClickHandler = () => {
    history.push("/menu");
  };

  useEffect(async () => {
    const response = await fetch("http://localhost:5000/api/beans", options);
    const data = await response.json();
    setStatus([
      {
        eta: data.eta,
        orderno: data.orderNr,
      },
    ]);
  }, []);

  return (
    <div className="status-page">
      {status.map((stat) => (
        <div key="wrapper">
          <div key="order" className="ordernumber">
            <p>{`Ordernummer #${stat.orderno}`}</p>
          </div>
          <div key="drone_img" className="drone">
            <img src={drone}></img>
          </div>
          <div key="confirm" className="confirmation-text">
            <p>Din beställning är på väg!</p>
          </div>
          <div key="eta" className="eta">
            <p>{`${stat.eta} minuter`}</p>
          </div>
        </div>
      ))}
      <button className="status-btn" onClick={onClickHandler}>
        Ok,cool!
      </button>
    </div>
  );
}
