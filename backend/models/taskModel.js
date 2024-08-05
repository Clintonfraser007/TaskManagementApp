import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    default: 'pending',
  },
  dueDate: {
    type: Date,
  },
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
