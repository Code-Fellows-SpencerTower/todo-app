import React from 'react';

import ToDo from './components/todo/todo.js';
import { ThemeProvider } from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ToDo />
      </ThemeProvider>
    );
  }
}
