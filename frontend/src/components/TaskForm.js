import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createTask, updateTask, fetchTask } from '../store/actions/taskActions';

const TaskForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const task = useSelector((state) => state.tasks.task);
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: '',
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchTask(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (task) {
      setForm({
        title: task.title,
        description: task.description,
        status: task.status,
        dueDate: task.dueDate,
      });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateTask(id, form));
    } else {
      dispatch(createTask(form));
    }
    navigate('/');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        required
      >
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
        required
      />
      <button type="submit">{id ? 'Update' : 'Create'} Task</button>
    </form>
  );
};

export default TaskForm;
