
import Task from "../models/taskModel.js";

// Get all tasks for a user
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    if (tasks) {
      res.status(201).send({
        success: true,
        message: "task find succesfully",
        tasks,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in finding tasks",
      error,
    });
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const task = new Task({
      title,
      description,
      category,
      
    });
    const createdTask = await task.save();

    if (createdTask) {
      res.status(201).send({
        success: true,
        message: "task create succesfully",
        createdTask,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Creating task",
      error,
    });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      task.title = req.body.title || task.title;
      task.description = req.body.description || task.description;
      task.category = req.body.category || task.category;
      const updatedTask = await task.save();
      
      if(updateTask){
        res.status(201).send({
          success: true,
          message: "task update succesfully",
          updatedTask,
        });
      }
    } else {
      res.status(404);
      throw new Error("Task not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in updating task",
      error,
    });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    // console.log(req.params.id);
    const task = await Task.findById({_id:req.params.id});
     
    if (task) {
      await task.deleteOne({_id:req.params.id});
      res.status(201).send({
        success: true,
        message: "task delete succesfully",
        task,
      });
    } else {
      res.status(404);
      throw new Error("Task not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in deleting task",
      error,
    });
  }
};

const getTaskByCotagory = async (req,res) => {
        try {
          const {category} = req.body;
           const tasks = await Task.find({category:category})

           if(tasks){
            res.status(201).send({
              success: true,
              message: "task find succesfully",
              tasks,
            });
           }
        } catch (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            message: "Errro in finding tasks",
            error,
          });
        }
}

export { getTasks, createTask, updateTask, deleteTask,getTaskByCotagory };
