import React from "react";
import { useContext } from 'react';
import { Navbar, Alignment } from '@blueprintjs/core';

function Header(props) {

  // let theme = useContext(ThemeContext);

  return (
    // <Navbar>
    //   <Navbar.Group align={Alignment.LEFT}>
    //     <Navbar.Heading>
    //       To Do List: {props.incomplete} items pending
    //     </Navbar.Heading>
    //   </Navbar.Group>
    // </Navbar>
    <div>
      <h1>
        To Do List: {props.incomplete} items pending
      </h1>
    </div >
  )
}

export default Header;