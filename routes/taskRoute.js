import express from "express";
import {
    getTasks,
   createTask, 
   updateTask, 
   deleteTask,
   getTaskByCotagory,
} from "../controllers/taskController.js";


//router object
const router = express.Router();

//routing
//  METHOD GET
router.get("/alltask", getTasks);


//  METHOD POST
router.post("/create", createTask);
router.post("/tasks", getTaskByCotagory);

//  METHOD PUT
router.put("/update/:id", updateTask);

//  METHOD delete
router.delete("/deleteTask/:id", deleteTask);

export default router;
