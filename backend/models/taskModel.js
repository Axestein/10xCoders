import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  content: { type: String, required: true },
  status: { type: String, enum: ['todo', 'inProgress', 'completed'], required: true },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;
