const getAllTasks = (req, res) => {
  res.send("Get All Task");
};

const getTask = (req, res) => {
  res.send("Get Single Task");
};

const updateTask = (req, res) => {
  res.send("Update Task");
};

const createTask = (req, res) => {
  res.send("Create Task");
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
