import React, { useContext } from "react";
import { Card, Elevation } from '@blueprintjs/core';
import { ThemeContext } from "../context/themeContext";


function List(props) {

  let theme = useContext(ThemeContext);
  return (
    props.list.map(item => (
      <div key={item.id}>
        <Card interactive={true} elevation={Elevation.TWO}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </Card>
      </div>
    ))
  )
}

export default List;

// {
//   list.map(item => (
//     <div key={item.id}>
//       <p>{item.text}</p>
//       <p><small>Assigned to: {item.assignee}</small></p>
//       <p><small>Difficulty: {item.difficulty}</small></p>
//       <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
//       <hr />
//     </div>
//   ))
// }