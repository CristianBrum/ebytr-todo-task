import React, { useContext } from 'react';
import TasksContext from '../context/TaskContext';
import TaskCard from './TaskCard';

function ShowTasks() {
  const { tasks } = useContext(TasksContext);
  return (
    <>
      {tasks.map(({ task, _id }) => (
        <div key={_id} className="todo-row">
          <TaskCard key={task._id} task={task} _id={_id} />
        </div>
      ))}
    </>
  );
}

export default ShowTasks;
