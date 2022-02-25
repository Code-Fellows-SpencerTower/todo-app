import React, { useContext } from "react";
import { SettingsContext } from "../context/settingsContext";
import { Button } from '@blueprintjs/core';


function ItemsPerPage() {

  let settings = useContext(SettingsContext);
  function handleTodosPerPage(e) {
    console.log('e.target.value', e.target.value);
    settings.setTodosPerPage(e.target.value);
  }

  return (
    <section id="items-per-page">
      <label>Todo Items Per Page: {settings.todosPerPage}</label>
      <Button onClick={handleTodosPerPage} value={3}>3</Button>
      <Button onClick={handleTodosPerPage} value={5}>5</Button>
      <Button onClick={handleTodosPerPage} value={7}>7</Button>
    </section>
  )
}

export default ItemsPerPage;