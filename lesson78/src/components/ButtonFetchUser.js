import React from "react";
const ButtonFetchUser = (props) => {
  return (
    <button
      style={{
        padding: "10 px 20 px",
        border: "2px solid black",
        backgroundColor: "white",
        margin: 20,
      }}
      onClick={props.click}
    >
      Dodaj użytkownika
    </button>
  );
};

export default ButtonFetchUser;
