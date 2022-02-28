'use strict';

import React, { useState } from "react";


// create Context object
export const SettingsContext = React.createContext();

// subscribers will read the context value from the closest matching Provider above it in the tree

// Provider component allows child components to subscribe to Context changes
// Provider accepts value prop

function SettingsProvider(props) {

  const [todosPerPage, setTodosPerPage] = useState(3);
  const [showCompletedTodos, setShowCompletedTodos] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const state = {
    todosPerPage,
    setTodosPerPage,
    showCompletedTodos,
    setShowCompletedTodos,
    currentPage,
    setCurrentPage,
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;