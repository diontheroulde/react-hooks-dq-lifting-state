import React, { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDark = () => {
    setDarkMode(!darkMode)
  }


  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header onToggleDark={toggleDark} darkMode={darkMode}  />
      <TweetsContainer />
    </DarkModeWrapper >
  );
}

export default App;
