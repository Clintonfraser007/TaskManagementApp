import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchTask, deleteTask } from '../store/actions/taskActions';

const TaskDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { task, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTask(id));
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deleteTask(id));
    navigate('/');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>
      <Link to={`/edit-task/${task._id}`}>Edit Task</Link>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default TaskDetail;
