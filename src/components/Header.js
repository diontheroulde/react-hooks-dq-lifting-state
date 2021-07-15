import React from "react";
import Menu from "./Menu";

function Header({onToggleDark, darkMode}) {
  
  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu onToggleDark={onToggleDark} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default Header;
