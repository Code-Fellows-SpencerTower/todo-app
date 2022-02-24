import React from "react";
import { useContext } from 'react';
import { ThemeContext } from "../context/themeContext";

function Header(props) {

  // let theme = useContext(ThemeContext);

  return (
    <div>
      <h1>
        To Do List: {props.incomplete} items pending
      </h1>
      <ThemeContext.Consumer>
        {(theme) => (
          <>
            <p>{theme}</p>
          </>
        )}
      </ThemeContext.Consumer>
    </div >
  )
}

export default Header;