import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TasksContext from '../context/TaskContext';

import { delTask, putTask } from '../helpers/functions';

function ShowTasks({ task, _id }) {
  const {
    editTask, setEditTask, setNewTask, newTasks,
  } = useContext(TasksContext);

  return (
    <>
      {!editTask ? (
        <div>
          {task}
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => delTask(_id)}
              className="delete-icon"
            />
            <TiEdit
              onClick={() => setEditTask(!editTask)}
              className="update-icon"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="task-card-top">
            <div>
              <input
                type="text"
                placeholder="Editar Tarefa"
                className="todo-input"
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
              />
              <RiCloseCircleLine
                onClick={() => delTask(_id)}
                className="delete-icon"
              />
              <TiEdit
                onClick={() => { putTask(_id, newTasks); setEditTask(!editTask); }}
                className="update-icon"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

ShowTasks.propTypes = {
  _id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
};

export default ShowTasks;
