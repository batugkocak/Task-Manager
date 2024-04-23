const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
    // res.status(200).json({ tasks, amount: tasks.length });
    // res
    //   .status(200)
    //   .json({ data: { tasks }, amount: tasks.length, succes: true });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No tasks with id of ${taskID}` });
    }
    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No tasks with id of ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {}
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete(taskID);
    if (!task) {
      return res.status(404).json({ msg: `No tasks with id of ${taskID}` });
    }
    return res.status(200).json({ deletedTask: task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
  return res.send("Delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  getTask,
  updateTask,
};
