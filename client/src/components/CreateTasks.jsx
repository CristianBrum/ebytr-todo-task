import React, { useContext } from 'react';
import TasksContext from '../context/TaskContext';

import { createNewTask } from '../helpers/functions';

function CreateTasks() {
  const { setNewTask, newTasks } = useContext(TasksContext);

  const name = localStorage.getItem('name');

  return (
    <div>
      <h1>{`Olá ${name.toUpperCase()}! O que temos para hoje?`}</h1>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Criar Tarefa"
          className="todo-input"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <button
          type="button"
          className="todo-button"
          onClick={() => createNewTask(newTasks)}
        >
          Criar
        </button>
      </form>
    </div>
  );
}

export default CreateTasks;
