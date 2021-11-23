import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TasksContext from './TaskContext';
import { getAllTasks } from '../services/TaskApi';

const TasksProvider = ({ children }) => {
  const [tasks, setTask] = useState([]);
  const [newTasks, setNewTask] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userNameReg, setUserNameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [editTask, setEditTask] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const fetchApi = async () => {
      const response = await getAllTasks();
      let fetchedTasks = [];
      if (response && response.statusText === 'OK') {
        fetchedTasks = response.data;
      }
      const data = fetchedTasks.filter(
        (item) => item.userId === userId,
      );
      setTask(data);
    };

    fetchApi();
  }, []);

  const allStates = {
    tasks,
    newTasks,
    setNewTask,
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    userNameReg,
    setUserNameReg,
    passwordReg,
    setPasswordReg,
    emailReg,
    setEmailReg,
    editTask,
    setEditTask,
  };

  return (
    <TasksContext.Provider value={allStates}>
      {children}
    </TasksContext.Provider>
  );
};

TasksProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TasksProvider;
