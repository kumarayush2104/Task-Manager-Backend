/* 
 * This file is part of the Task Manager Application (https://github.com/kumarayush2104/TaskManager).
 * Copyright (c) 2023 Ayush Kumar (kumarayush2104@gmail.com).
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

// Dependencies
const mongoose = require("mongoose");
const { task } = require("../model/taskmodel");
const { validateTask, validateTaskId } = require("./validate");
const { success, error } = require("./message");

// connectDatabase(url, database): establish a connection to mongodb with the provided url and database name
async function connectDatabase(url, database) {
    try {
        if (!url || !database) throw new Error("URL or Database name is invalid !");
        await mongoose.connect("mongodb://" + url + ":27017/" + database);
        console.log(success("[I] " + database + "@MongoDB is successful !"));
    } catch (e) {
        console.log(error("[E] " + e.message));
    }
}

// fetchAllTasks(request, response): fetches all the tasks
async function fetchAllTasks(_, res) {
    try {
        const allTasks = await task.find({});
        res.status(200).json({
            success: true,
            message: allTasks
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        });
    }
}

// fetchTask(request, response): fetches a specific task details using task id
async function fetchTask(req, res) {
    try {
        const taskId = req.params.id;
        const selectedTask = await task.findById(taskId);

        res.status(200).json({
            success: true,
            message: selectedTask
        });

    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        });
    }
}

// createTask(request, response): creates a new task
async function createTask(req, res) {
    try {
        const taskName = req.body.taskName;
        if (!validateTask(taskName))
            throw new Error("Task name must be at least 3 characters long and should not include special characters.");

        const newTask = new task({
            taskName: taskName
        });

        await newTask.save();

        res.status(200).json({
            success: true,
            message: taskName + " added successfully."
        });

    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        });
    }
}

// deleteTask(request, response): deletes a specified task using task id
async function deleteTask(req, res) {
    try {
        const taskId = req.params.id;
        if (!validateTaskId(taskId)) throw new Error("Invalid Task id.");

        const doesTaskExist = await task.findById(taskId);
        if (!doesTaskExist) throw new Error("Task doesn't exist.");

        await task.findByIdAndDelete(taskId);
        res.json({
            success: true,
            message: doesTaskExist.taskName + " deleted successfully."
        });
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
}

// deleteAllTasks(request, response): deletes all the task
async function deleteAllTasks(_, res) {
    try {
        await task.deleteMany({});
        res.json({
            success: true,
            message: "All the tasks has been deleted."
        })
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
}

// updateTask(request, response): updates an existing task
async function updateTask(req, res) {
    try {
        const taskId = req.params.id;
        const taskStatus = req.body.taskStatus;

        if (!validateTaskId(taskId)) throw new Error("Invalid Task id.");
        if(!taskStatus) throw new Error("Task status not provided.");
        const doesTaskExist = await task.findById(taskId);
        if (!doesTaskExist) throw new Error("Task doesn't exist.");

        await task.findOneAndUpdate({ _id: taskId }, { isCompleted: taskStatus });
        res.json({
            success: true,
            message: doesTaskExist.taskName + " updated successfully."
        });
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
}

module.exports = {
    connectDatabase,
    fetchTask,
    fetchAllTasks,
    createTask,
    deleteTask,
    deleteAllTasks,
    updateTask
}