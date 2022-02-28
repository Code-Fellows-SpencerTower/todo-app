import React, { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../context/settingsContext";


function Pagination(props) {


  const settings = useContext(SettingsContext);
  let todosPerPage = settings.todosPerPage;
  let totalTodos = props.totalTodos;
  console.log('TOTAL TODOS', totalTodos);

  let pageNums = [1];

  for (let i = 2; i < Math.ceil(totalTodos / todosPerPage); i += 1) {
    console.log('PAGE NUMS', pageNums);
    pageNums.push(i);
  }


  return (
    <nav id="page-numbers">
      <ul>
        {pageNums.map(pageNum => (
          < li key={pageNum} >
            <a href="">{pageNum}</a>
          </li>
        ))}
      </ul>
    </nav >
  )
}

export default Pagination;