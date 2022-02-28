import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import Header from '../Header/header.js';
import Form from '../Form/form.js';
import List from '../List/list.js';
import ItemsPerPage from '../ItemsPerPage/ItemsPerPage';
import { SettingsContext } from '../context/settingsContext.js';
import Pagination from '../Pagination/Pagination.js'

import { v4 as uuid } from 'uuid';

const ToDo = () => {

  // list is state, starts as empty array
  const [list, setList] = useState([]);
  // incomplete is state, starts as empty array
  const [incomplete, setIncomplete] = useState([]);
  // useForm - custom hook for managing forms
  const { handleChange, handleSubmit } = useForm(addItem);

  const settings = useContext(SettingsContext);

  function addItem(item) {
    console.log('LIST', list);
    console.log(item);
    item.id = uuid();
    item.complete = false;
    // update list state with new item
    setList([...list, item]);
    console.log('LIST AFTER SETLIST', list);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  // function to show only incomplete items
  function filterComplete(list) {
    let incompleteTodos = [];
    list.forEach(todo => {
      if (!todo.complete) {
        incompleteTodos.push(todo);
      }
    });
    return incompleteTodos;
  }

  // edits list to show number of items specified by todosPerPage
  let todosPerPage = settings.todosPerPage;
  let currentPage = settings.currentPage;
  // take page number
  let indexFirstTodo = (currentPage * todosPerPage) - todosPerPage;
  let indexLastTodo = currentPage * todosPerPage;
  // divide into sets
  let todoRange = list.slice(indexFirstTodo, indexLastTodo);


  return (
    <>
      <Header incomplete={incomplete} />
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      <ItemsPerPage />
      <List list={todoRange} toggleComplete={toggleComplete} />
      <Pagination totalTodos={list.length} />
    </>
  );
};

export default ToDo;
