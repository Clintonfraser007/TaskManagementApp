import React from 'react';
import TaskDetail from '../components/TaskDetail';

const TaskDetailView = ({ match }) => {
  return (
    <div>
      <TaskDetail match={match} />
    </div>
  );
};

export default TaskDetailView;
