'use strict';

import React, { useState } from "react";


// create Context object
export const ThemeContext = React.createContext();

// subscribers will read the context value from the closest matching Provider above it in the tree

// Provider component allows child components to subscribe to Context changes
// Provider accepts value prop


function ThemeProvider(props) {
  const state = {
    mode: 'dark',
  }
  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;