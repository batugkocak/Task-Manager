const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
};

const getTask = (req, res) => { 
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Update Task");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json(task);
};

const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  getTask,
  updateTask,
};
