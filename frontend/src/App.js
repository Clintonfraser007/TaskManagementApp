import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import TaskForm from './components/TaskForm';

const App = () => {
  return (
    <div>
      <h1>Task Management App</h1>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="/create-task" element={<TaskForm />} />
        <Route path="/edit-task/:id" element={<TaskForm />} />
      </Routes>
    </div>
  );
};

export default App;
