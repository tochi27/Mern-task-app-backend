const express = require('express');
const Task = require('../models/taskModel');
const { createTask,
        getTasks,
        getTask,
        deleteTask,
        updateTask,
        updateSingleFieldTask } = require('../controllers/taskController');

const router = express.Router();


router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);
router.patch("/:id", updateSingleFieldTask);

module.exports = router