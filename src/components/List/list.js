import React, { useContext } from "react";
import { Card, Elevation } from '@blueprintjs/core';
import { SettingsContext } from "../context/settingsContext";


function List(props) {

  let settings = useContext(SettingsContext);
  // set current page number and function to set current page
  // const [currentPage, setCurrentPage] = useContext(SettingsContext);
  return (
    props.list.map(item => (
      <Card interactive={true} elevation={Elevation.TWO}>
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div >
      </Card>
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