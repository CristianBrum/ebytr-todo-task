import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Tasks() {
  const [taske, setTask] = useState([]);

  const [newTasks, setNewTask] = useState('');

  const createTask = () => {
    const token = localStorage.getItem('token');

    Axios.post(
      'http://localhost:5000/tasks',
      {
        task: newTasks,
      },
      {
        headers: { authorization: token },
      },
    );
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    Axios.get('http://localhost:5000/tasks', {

    }).then((response) => {
      if (!response.data.tasks) {
        setTask();
      } else {
        const data = response.data.tasks.filter((item) => item.userId === userId);
        setTask(data);
      }
    });
  }, []);

  function refresh() {
    createTask();
    window.location.href = 'http://localhost:3000/tasks';
  }
  return (
    <div>
      <div className="Registation">
        <h1>Nova Tarefa</h1>
        <input
          type="text"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
      </div>
      <button type="button" onClick={refresh}>
        Criar
      </button>
      {taske.map(({ task, _id }) => (
        <div key={_id}>
          <li>{task}</li>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
