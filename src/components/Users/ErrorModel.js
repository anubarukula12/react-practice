import React from "react";
import "./AddUser.css";
import Card from "../UI/Card"
import "./ErrorModel.css";
const ErrorModel = (props) => {
  return (
      <div className="backdrop" onClick={props.onConfirm}>
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <button type="submit" className="button-sub" onClick={props.onConfirm}>Okay</button>
      </footer>
    </Card></div>
  );
};
export default ErrorModel;