import React from "react";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title />
      <Button text="button" />
    </div>
  );
}

export default App;
