import Task from '../models/taskModel.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { title, description, status, dueDate } = req.body;

  const task = new Task({
    title,
    description,
    status,
    dueDate,
  });

  try {
    const createdTask = await task.save();
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { title, description, status, dueDate } = req.body;

  try {
    const task = await Task.findById(req.params.id);

    if (task) {
      task.title = title;
      task.description = description;
      task.status = status;
      task.dueDate = dueDate;

      const updatedTask = await task.save();
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
    
        if (!task) {
          return res.status(404).send({ message: 'Task not found' });
        }
    
        res.send({ message: 'Task deleted successfully' });
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
};
