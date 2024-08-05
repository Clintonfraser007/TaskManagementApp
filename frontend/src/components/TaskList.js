import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks } from '../store/actions/taskActions';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <h2>Task List</h2>
      <Link to="/create-task">Create New Task</Link>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className="task-list-item">
            <Link to={`/tasks/${task._id}`}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
              <p>Due Date: {task.dueDate}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
