import React from 'react';
import './app.scss';

import ToDo from './components/todo/todo.js';
import SettingsProvider from './components/context/settingsContext.js';

export default function App() {
  return (
    <SettingsProvider>
      <ToDo />
    </SettingsProvider>
  );
}

