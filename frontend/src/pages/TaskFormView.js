import React from 'react';
import TaskForm from '../components/TaskForm';

const TaskFormView = ({ match, history }) => {
  return (
    <div>
      <TaskForm match={match} history={history} />
    </div>
  );
};

export default TaskFormView;
