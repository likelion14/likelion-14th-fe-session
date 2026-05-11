import React from "react";
import Profile from "./components/profile";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>내 프로필</h2>
      <Profile mood="행복해" />
    </div>
  );
}

export default App;
