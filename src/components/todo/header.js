import React from "react";

function Header(props) {
  return (
    <h1>To Do List: {props.incomplete} items pending</h1>
  )
}

export default Header;