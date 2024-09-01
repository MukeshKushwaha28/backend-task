import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Incomplete', 'In Progress', 'Completed'],
    default: 'Incomplete',
  },
  
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);
export default Task;
