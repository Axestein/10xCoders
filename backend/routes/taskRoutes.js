import express from 'express';
import { getTasks, addTask, deleteTask, updateTaskStatus } from '../controllers/taskController.js';

const router = express.Router();

// Get all tasks
router.get("/", getTasks);

// Add a new task
router.post("/", addTask);

// Delete a task
router.delete("/:taskId", deleteTask);

// Update task status (e.g., move from todo to in-progress)
router.put("/status", updateTaskStatus);

export default router;
