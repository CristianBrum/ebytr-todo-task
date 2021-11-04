import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Tasks() {
  const [taske, setTask] = useState([]);

  const [newTasks, setNewTask] = useState('');

  const token = localStorage.getItem('token');

  const createTask = () => {
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

  const updateTask = (id) => {
    Axios.put(
      `http://localhost:5000/tasks/${id}`,
      {
        task: newTasks,
      },
      {
        headers: { authorization: token },
      },
    );
  };

  const deleteTask = (_id) => {
    Axios.delete(`http://localhost:5000/tasks/${_id}`, {
      headers: { authorization: token },
    });
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    Axios.get('http://localhost:5000/tasks', {}).then((response) => {
      if (!response.data.tasks) {
        setTask();
      } else {
        const data = response.data.tasks.filter(
          (item) => item.userId === userId,
        );
        setTask(data);
      }
    });
  }, []);

  function refreshAndCreate() {
    createTask();
    window.location.href = 'http://localhost:3000/tasks';
  }

  function refreshAndUpdate(_id) {
    updateTask(_id);
    window.location.href = 'http://localhost:3000/tasks';
  }

  function refreshAndDelete(_id) {
    deleteTask(_id);
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

      <button type="button" onClick={refreshAndCreate}>
        Criar
      </button>

      {taske.map(({ task, _id }) => (
        <div key={_id}>
          <li>{task}</li>
          <button type="button" onClick={() => refreshAndUpdate(_id)}>
            update
          </button>
          <button type="button" onClick={() => refreshAndDelete(_id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
