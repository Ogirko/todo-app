import Task from '../models/Task-model.js';

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json({allTasks});
  } catch (error) {
    res.status(500).json({msg: error});
  }
}

const getTask = async (req, res) => {
  try {
    const {id:taskID} = req.params;
    const getOneTask = await Task.findOne({_id:taskID});
    if (!getOneTask){
      return res.status(404).json({msg: `There is no task with id ${taskID}`})
    }
    res.status(200).json({getOneTask});
  } catch (error) {
    res.status(500).json({msg: error});
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({task});
  } catch (error) {
    res.status(500).json({msg: error});
  }
}

const updateTask = async (req, res) => {
  try {
    const {id:taskID} = req.params;
    const updTask = await Task.findOneAndUpdate({_id:taskID}, req.body, {
      new: true,
      runValidators: true
    });
    if (!updTask){
      return res.status(404).json({msg: `There is no task with id ${taskID}`});
    }
    res.status(200).json({updTask});
  } catch (error) {
    res.status(500).json({msg: error});
  }
}

const deleteTask = async (req, res) => {
  try {
    const {id:taskID} = req.params;
    const delOneTask = await Task.findOneAndDelete({_id:taskID});
    if (!delOneTask){
      return res.status(404).json({msg: `There is no task with id ${taskID}`})
    };
    res.status(200).json({delOneTask});
  } catch (error) {
    res.status(500).json({msg: error});
  }
}

export { 
  getAllTasks,
  createTask, 
  getTask,
  updateTask,
  deleteTask
};